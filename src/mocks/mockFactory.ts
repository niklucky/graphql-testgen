type GraphqlMock = {
  variables: Record<string, unknown>,
  expected: Record<string, unknown>
  test: (data: unknown) => void
}

let mockStorage: Map<string, GraphqlMock> = new Map();

const mockFactory = {
  get(resolverName: string) {
    return mockStorage.get(resolverName);
  },
  set(resolverName: string, value: GraphqlMock) {
    return mockStorage.set(resolverName, value);
  },
  variables(resolverName: string, variables: Record<string, unknown>) {
    const mocks = mockFactory.get(resolverName)?.variables;

    if (!mocks) {
      return variables;
    }

    return {
      ...variables,
      ...mocks,
    };
  },
  expected(resolverName: string, data: Record<string, unknown>) {
    const expected = mockFactory.get(resolverName)?.expected;

    if (!expected) {
      return data;
    }

    return {
      ...expected,
      ...data,
    };
  },
  test(resolverName: string) {
    return mockFactory.get(resolverName)?.test;
  },

  init(mocks: Record<string, GraphqlMock>) {
    mockStorage = new Map(Object.entries(mocks))

    return mockFactory
  }
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
