type TQueryType = 'query' | 'mutation';
type TOutputType = {
  resolverName: string;
  queryType: TQueryType;
  inputs?: string;
};
type TOutputTypesType = {
  resolverName: string;
  inputs?: string;
  output?: string;
};
type TGenerateOutputType = {
  resolverName: string;
  queryType: TQueryType;
  output: Omit<TOutputType, 'resolverName' | 'queryType'>;
  outputTypes: Omit<TOutputTypesType, 'resolverName'>;
  variables: string;
};

const templates = {
  imports: `const {client} = require('graphql-testgen')`,
  body: {
    requestBody: (body: string) => `const body = ${body}`,
    resolver: (query: string, variables: string) =>
      `{"query": \`${query}\`, "variables": \`${variables}\`}`,
    output: (data: TOutputType) =>
      `${data.queryType} ${data.resolverName} ${data.inputs}`,
    outputTypes: (data: TOutputTypesType) =>
      `{\n${data.resolverName} ${data.inputs} ${data.output}\n}`,
    test: (resolverName: string) => `test('${resolverName} query', async () => {
        const response = await client.post(body)
        expect(response.status).toBe(200)
      })`,
  },
};
export const generateOutput = (data: TGenerateOutputType) => {
  const { resolverName, queryType, output, outputTypes, variables } = data;
  const imports = templates.imports;
  const outputString = templates.body.output({
    resolverName,
    queryType,
    ...output,
  });
  const outputTypesString = templates.body.outputTypes({
    resolverName,
    ...outputTypes,
  });
  const resolver = templates.body.resolver(
    [outputString, outputTypesString].join('\n'),
    variables,
  );
  const body = templates.body.requestBody(resolver);
  const tests = templates.body.test(resolverName);
  return [imports, body, tests].join('\n');
};
