/* eslint-disable @typescript-eslint/no-explicit-any */
const mockStorage: Map<string, { variables: any; result: any }> = new Map();

const mockFactory = {
  get(resolverName: string) {
    return mockStorage.get(resolverName);
  },
  set(resolverName: string, value: any) {
    return mockStorage.set(resolverName, value);
  },
  variables(resolverName: string, variables: any) {
    // Magic!
    const mocks = mockFactory.get(resolverName)?.variables;

    if (!mocks) {
      return variables;
    }

    return {
      ...variables,
      ...mocks,
    };
  },
  result(resolverName: string, result: any) {
    // Magic!
    const mocks = mockFactory.get(resolverName)?.result;

    if (!mocks) {
      return result;
    }

    return {
      ...result,
      ...mocks,
    };
  },
};

function loadMocks(path: string) {
  const files: string[] = [];

  files.forEach(fileName => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const data = require(fileName);

    for (const [resolverName, value] of Object.entries(data)) {
      mockFactory.set(resolverName, value);
    }
  });
}

export { mockFactory, loadMocks };
