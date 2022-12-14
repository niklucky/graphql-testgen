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
type TGenerateBody = {
  resolverName: string;
  queryType: TQueryType;
  inputs?: string;
  outputInputs?: string;
  output?: string;
  data: string;
};
const templates = {
  body: (data: TGenerateBody) => `
const { client } = require('graphql-testgen')

${data.data}
const body = { 
  "query": 
\`
${data.queryType} ${data.resolverName}${data.inputs} {
  ${data.resolverName} ${data.outputInputs}${data.output}
  }
  \`,
  "variables": data
}

test('${data.resolverName} query', async () => {
  const response = await client.post(body)
  expect(response.status).toBe(200)
  expect(response.data.data.${data.resolverName}).toMatchObject(data)
})
  `,
};

export const generateOutput = (data: TGenerateOutputType) => {
  const { resolverName, queryType, output, outputTypes, variables } = data;
  const body = templates.body({
    data: variables,
    resolverName,
    queryType,
    inputs: output.inputs,
    output: outputTypes.output,
    outputInputs: outputTypes.inputs,
  });

  return body;
};
