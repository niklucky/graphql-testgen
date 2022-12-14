#!/usr/bin/env node

import { Command, InvalidArgumentError, Option } from 'commander';
import fs from 'fs';
import { DEFAULT_CONFIG } from './constants';
import generator from './generator/generator';
import type { Options, TConfigOptions } from './types/cli';

const program = new Command('graphql-testgen');

program
  .version('0.0.1')
  .description(
    'GraphQL Test Generator CLI Tool for Node.js and TypeScript projects with Jest support.'
  )
  .showHelpAfterError();

program
  .command('generate')
  .option(
    '-c, --configPath <path>',
    'path to config file',
    optionsParseDir,
    undefined
  )
  .option(
    '-s, --schemaPath <path>',
    'path to schema file or url path to schema',
    optionsParseUrlOrFile,
    undefined
  )
  .option(
    '-o, --outputPath <path>',
    'path to output',
    optionsParseDir,
    undefined
  )
  .option(
    '-m, --mockDir <path>',
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
    const config = options.configPath
      ? parseConfig(options.configPath)
      : options;
    const parsedConfig = {
      ...DEFAULT_CONFIG,
      ...config,
    } as TConfigOptions;

    console.log(parsedConfig);
    console.log('Generating tests...');
    const generatedTests = await generator(parsedConfig);

    console.log('Tests generated! 🎉\n Total: ' + generatedTests);
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
  if (
    value &&
    (fs.readFileSync(value) ||
      value.startsWith('http') ||
      value.startsWith('https'))
  ) {
    return value;
  }
  throw new InvalidArgumentError('Not a url or file.');
}
function parseConfig(config: string): TConfigOptions {
  return JSON.parse(fs.readFileSync(config, 'utf8'));
}
//clear
