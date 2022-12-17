import fs from 'fs';
import { initConfig } from "../config";
import type { TConfigOptions } from "../types/cli";

type GraphqlMock = {
  variables: Record<string, unknown>,
  expected: Record<string, unknown>
  test: (data: unknown) => void
}

let mockStorage: Map<string, GraphqlMock> = new Map();

let isInitialized = false


function get(resolverName: string) {
  return mockStorage.get(resolverName);
}
function set(resolverName: string, value: GraphqlMock) {
  return mockStorage.set(resolverName, value);
}
function variables(resolverName: string, variables: Record<string, unknown>) {
  init()

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
  init()
  const expected = mockFactory.get(resolverName)?.expected;

  if (!expected) {
    return data;
  }

  return {
    ...expected,
    ...data,
  };
}
function test(resolverName: string) {
  init()

  return mockFactory.get(resolverName)?.test;
}

function init() {
  if (isInitialized) {
    return mockFactory
  }
  const config = initConfig()

  if (config.mocks) {
    mockStorage = new Map(Object.entries(config.mocks as Record<string, GraphqlMock>))
  }
  isInitialized = true

  return mockFactory
}

function data(resolverName: string, response: any) {
  try {
    const data = response.data.data[resolverName]
    const config = initConfig()

    if (config.snapshots) {
      saveSnapshot(config, resolverName, data)
    }

    return data
  } catch (e) {
    console.log(e)
    console.error(`${resolverName} response error: ${JSON.stringify(response.data)}`)
  }

  return null

}

function saveSnapshot(config: TConfigOptions, resolverName: string, data: unknown) {
  const path = process.cwd() + '/' + config.snapshots + '/' + resolverName + '.js'

  if (!fs.existsSync(path)) {
    const snapshot = `module.exports = {
  expected: ${JSON.stringify(data, null, 2)}
};
`

    fs.writeFileSync(path, snapshot)
  }

}

const mockFactory = {
  init,
  get,
  set,
  test,
  variables,
  expected,
  isInitialized,
  data
};

export { mockFactory };
