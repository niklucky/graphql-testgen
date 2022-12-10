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
};

function loadMocks(path: string) {
  // Считываем все файлы
  const files: string[] = [];
  files.forEach(fileName => {
    const data = require(fileName);
    for (let [resolverName, value] of Object.entries(data)) {
      mockFactory.set(resolverName, value);
    }
  });
}

export { mockFactory, loadMocks };
