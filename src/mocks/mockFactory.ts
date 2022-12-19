import fs from 'fs';
import { initConfig } from '../config';
import type { TConfigOptions, TResponse } from '../types/cli';

type GraphqlMock = {
  variables: Record<string, unknown>;
  expected: Record<string, unknown>;
  test: (data: unknown) => void;
};

let mockStorage: Map<string, GraphqlMock> = new Map();

let isInitialized = false;

function get(resolverName: string) {
  return mockStorage.get(resolverName);
}
function set(resolverName: string, value: GraphqlMock) {
  return mockStorage.set(resolverName, value);
}
function variables(resolverName: string, variables: Record<string, unknown>) {
  init();

  const mocks = mockFactory.get(resolverName)?.variables;

  if (!mocks) {
    return variables;
  }

  return {
    ...variables,
    ...mocks,
  };
}
function expected(resolverName: string, data: Record<string, unknown>) {
  init();
  const expected = mockFactory.get(resolverName)?.expected;

  console.log(expected);
  if (!expected) {
    return data;
  }

  return {
    ...expected,
    ...data,
  };
}
function test(resolverName: string) {
  init();

  return mockFactory.get(resolverName)?.test;
}

function init() {
  if (isInitialized) {
    return mockFactory;
  }
  const config = initConfig();

  if (config.mocks) {
    mockStorage = new Map(
      Object.entries(config.mocks as Record<string, GraphqlMock>)
    );
  }
  isInitialized = true;

  return mockFactory;
}

function data(
  resolverName: string,
  response: TResponse,
  overwriteSnapshot = false
) {
  try {
    const data = response.data.data[resolverName];
    const config = initConfig();

    if (config.snapshots && config.snapshots.path) {
      saveSnapshot(config, resolverName, data, overwriteSnapshot);
    }

    return data;
  } catch (e) {
    console.log(e);
    console.error(
      `${resolverName} response error: ${JSON.stringify(response.data)}`
    );
  }

  return null;
}

function saveSnapshot(
  config: TConfigOptions,
  resolverName: string,
  data: unknown,
  overwriteSnapshot = false
) {
  const path =
    process.cwd() + '/' + config.snapshots.path + '/' + resolverName + '.js';

  if (!fs.existsSync(path) || overwriteSnapshot) {
    if (config.snapshots.ignoreFields && config.snapshots.ignoreFields.length) {
      data = removeFields(data, config.snapshots.ignoreFields);
    }
    const snapshot = `module.exports = {
  expected: ${JSON.stringify(data, null, 2)}
};
`;

    fs.writeFileSync(path, snapshot);
  }
}

function removeFields(data: any, ignoreFields: string[]) {
  Object.keys(data).forEach((key: any) => {
    if (ignoreFields.includes(key)) {
      delete data[key];

      return;
    }
    if (data[key] === null) {
      return;
    }
    if (typeof data[key] === 'object') {
      data[key] = removeFields(data[key], ignoreFields);
    }
  });

  return data;
}

const mockFactory = {
  init,
  get,
  set,
  test,
  variables,
  expected,
  isInitialized,
  data,
};

export { mockFactory };
