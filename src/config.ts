import fs from 'fs';
import type { Options, TConfigOptions } from './types/cli';

let config: TConfigOptions = {
  targetUrl: process.env.TARGET_URL || 'http://localhost:3000/graphql',
  schema: 'http://localhost:3000/graphql',
  output: 'tests/generated/',
  mocks: 'mocks/',
  depth: 4,
  append: false,
};

export function initConfig(options?: Options) {
  loadConfig(options?.config);

  config = {
    ...config,
    ...options,
    append: Boolean(options?.append) || config.append,
  };
}

// 1. defaultConfig
// 2. externalConfig
// 3. options

export function getConfig(): TConfigOptions {
  return config;
}

function loadConfig(path?: string) {
  if (path) {
    if (!path.startsWith('/')) {
      path = '/' + path;
    }
    path = process.cwd() + path;
  }
  if (!path) {
    path = process.cwd() + '/testgen.js';
  }
  console.log('path', path);
  if (fs.existsSync(path)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const externalConfig = require(path);

    config = {
      ...config,
      ...externalConfig,
    };
  }
}
