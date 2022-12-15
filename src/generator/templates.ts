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
  variables: ([string, string] | undefined)[];
};
type TGenerateBody = {
  resolverName: string;
  queryType: TQueryType;
  inputs?: string;
  outputInputs?: string;
  output?: string;
  data: ([string, string] | undefined)[];
};
const templates = {
  body: (data: TGenerateBody) => `
const { client } = require('graphql-testgen')

const data = {${data.data
  .map(item => {
    if (item) {
      return `${item[0]}: ${item[1]},`;
    }

    return '';
  })
  .join('')}
}
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
