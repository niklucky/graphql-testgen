// import generator from './helpers/generator';
// generator();
import { Command } from 'commander';
const program = new Command('graphql-testgen');

program
  .version('0.0.1')
  .description(
    'GraphQL Test Generator CLI Tool for Node.js and TypeScript projects with Jest and Supertest support.',
  );

program
  .option('-c, --config <path>', 'path to config file')
  .option('-s, --schema <path>', 'path to schema')
  .option('-o, --output <path>', 'path to output')
  .option('-t, --test <path>', 'path to test')
  .option('-d, --depth <depth>', 'max depth of query')
  .option('-f, --force', 'force to overwrite files')
  .option('-p, --path <path>', 'path to test file')
  .option('-m, --mockdir', 'path to mock directory')
  .option('-r, --remove', 'remove test file')
  
