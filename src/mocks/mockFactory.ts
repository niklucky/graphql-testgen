import { initConfig } from "../config";

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
const mockFactory = {
  init,
  get,
  set,
  test,
  variables,
  expected,
  isInitialized,
};

// function load(path: string) {
//   const files: string[] = [];

//   files.forEach(fileName => {
//     // eslint-disable-next-line @typescript-eslint/no-var-requires
//     const data = require(fileName);

//     for (const [resolverName, value] of Object.entries(data)) {
//       mockFactory.set(resolverName, value as GraphqlMock);
//     }
//   });
// }

export { mockFactory };
