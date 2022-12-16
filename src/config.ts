import fs from 'fs';
import type { Options, TConfigOptions } from "./types/cli";

let isInitialized = false

let config: TConfigOptions = {
  targetUrl: process.env.TARGET_URL || 'http://localhost:3000/graphql',
  schema: 'http://localhost:3000/graphql',
  output: 'tests/generated/',
  mocks: {},
  depth: 4,
  append: false,
};

export function initConfig(options?: Options) {
  loadConfig(options?.config);

  config = {
    ...config,
    ...options
  }
  isInitialized = true

  return config
}

// 1. defaultConfig
// 2. externalConfig
// 3. options

export function getConfig(): TConfigOptions {
  if (!isInitialized) {
    initConfig()
  }

  return config
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
  // console.log('path', path);
  if (fs.existsSync(path)) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const externalConfig = require(path);

    config = {
      ...config,
      ...externalConfig,
    };
  }
}
