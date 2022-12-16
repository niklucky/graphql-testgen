import type { GraphQLOutputType, GraphQLScalarType } from 'graphql';
import { getTypeBasedOnScalar } from './helpers';

type TQueryType = 'query' | 'mutation';
type TOutputType = {
  resolverName: string;
  queryType: TQueryType;
  inputs?: string;
};
type TOutputTypesType = {
  resolverName: string;
  inputs?: string;
  output?: string | GraphQLOutputType;
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
  output?: string | GraphQLOutputType;
  data: ([string, string] | undefined)[];
};
const templates = {
  body: (data: TGenerateBody) => `
const { client } = require('graphql-testgen')

const variables = global.mockFactory.variables(
  '${data.resolverName}',
  {
  ${data.data
    .map(item => {
      if (item) {
        return `  ${item[0]}: ${item[1]},`;
      }

      return '';
    })
    .join('')}
  }
)
const body = { 
  "query": 
\`
${data.queryType} ${data.resolverName}${data.inputs} {
  ${data.resolverName} ${data.outputInputs}${
    typeof data.output == 'string' ? data.output : ''
  }
  }
  \`,
  ${data.data.length > 0 ? 'variables' : ''}
}

test('${data.queryType}:${data.resolverName}', async () => {
  const response = await client.post(body, undefined, global.headers);
  const testOverride = global.mockFactory.test('${data.resolverName}');
  const expected = global.mockFactory.expected('${
    data.resolverName
  }', variables);

  if (testOverride) {
    testOverride(response, expected, expect);
    return;
  }

  expect(response.status).toBe(200)
  ${
    typeof data.output != 'string'
      ? `expect(response.data.data.${
          data.resolverName
        }).toEqual(expect.any(${getTypeBasedOnScalar(
          data.output as GraphQLScalarType
        )}))`
      : `expect(response.data.data.${data.resolverName}).toMatchObject(expected)`
  }
  
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
