#!/usr/bin/env node

import { Command, InvalidArgumentError, Option } from 'commander';
import fs from 'fs';
import { getConfig, initConfig } from './config';
import generator from './generator/generator';
import type { Options, TClearOptions } from './types/cli';

const program = new Command('graphql-testgen');

program
  .version('0.0.2')
  .description(
    'GraphQL Test Generator CLI Tool for Node.js and TypeScript projects with Jest support.'
  )
  .showHelpAfterError();

program
  .command('gen')
  .option(
    '-c, --config <path>',
    'path to config file',
    optionsParseDir,
    undefined
  )
  .option(
    '-s, --schema <path>',
    'path to schema file or url path to schema',
    optionsParseUrlOrFile,
    undefined
  )
  .option(
    '-o, --output <path>',
    'path to output',
    optionsParseDir,
    undefined
  )
  .option(
    '-m, --mocks <path>',
    'path to mock directory',
    optionsParseDir,
    undefined
  )
  .option(
    '-d, --depth <depth>',
    'max depth of query (maximum: 4)',
    optionsParseInt,
    4
  )
  .addOption(
    new Option('-a, --append', 'append to existing files')
      .choices(['true', 'false'])
      .default('true')
  )
  .action(async (options: Options) => {

    initConfig(options)

    console.log('Generating tests...');
    const generatedTests = await generator(getConfig());

    console.log('Tests generated! 🎉\n Total: ' + generatedTests);
  });


program
  .command('clear')
  .option(
    '-t, --test <name>',
    'path to test file'
  )
  .addOption(
    new Option('-a, --all', 'delete all in config path')
  )
  .action((options: TClearOptions) => {
    initConfig()
    const path = process.cwd() + '/' + getConfig().output

    if (options.all) {
      if (fs.existsSync(path)) {
        fs.rmSync(path, { recursive: true });
      }
    } else {
      const filePath = path + '/' + options.test

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }
  });

program.parse();

function optionsParseInt(value: string) {
  const parsedValue = parseInt(value, 10);

  if (isNaN(parsedValue)) {
    throw new InvalidArgumentError('Not a number.');
  }

  return parsedValue;
}
function optionsParseDir(value: string) {
  if (value && fs.existsSync(value)) {
    return value;
  }
  throw new InvalidArgumentError('Not a directory.');
}

function optionsParseUrlOrFile(value: string) {
  if (value) {
    if (value.startsWith('http')) {
      return value
    }
    if (fs.readFileSync(value)) {
      return value
    }
  }
  throw new InvalidArgumentError('Not a url or file.');
}

//clear
