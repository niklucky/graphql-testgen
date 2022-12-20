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
const { client, mockFactory } = require('graphql-testgen')

const variables = mockFactory.variables(
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
  const response = await client.post(body, undefined, global.headers)
  .catch(e => console.error('${
    data.resolverName
  } request error: ', e.response.data));
  const testOverride = mockFactory.test('${data.resolverName}');
  const expected = mockFactory.expected('${data.resolverName}'${
    data.data.length > 0 ? ', variables' : ''
  });

  if(response.data.errors) {
    console.error('${
      data.resolverName
    } response error: ', response.data.errors);
  }

  if (testOverride) {
    testOverride(response, expected, expect);
    return;
  }
  
  const data = mockFactory.data('${data.resolverName}', response);

  expect(response.status).toBe(200)
  ${
    typeof data.output != 'string'
      ? `expect(new ${getTypeBasedOnScalar(
          data.output as GraphQLScalarType
        )}(response.data.data.${
          data.resolverName
        })).toEqual(expect.any(${getTypeBasedOnScalar(
          data.output as GraphQLScalarType
        )}))`
      : `expect(data).toMatchObject(expected)`
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
