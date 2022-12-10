import { loadSchema } from '@graphql-tools/load';
import { UrlLoader } from '@graphql-tools/url-loader';
import { GraphQLField } from 'graphql';
import {
  getInputs,
  getQueryArgs,
  getQueryFields,
  getReturnTypeFields,
  writeFile,
} from './helper';
import { generateOutput } from './templates';

function generateTest(
  resolver: GraphQLField<never, never, never>,
  isMutation = true,
) {
  const fields = getReturnTypeFields(resolver.type);

  let output = '';

  if (fields) {
    output = `{
      ${getQueryFields(fields)}
    }`;
  }
  const text = generateOutput({
    resolverName: resolver.name,
    queryType: isMutation ? 'mutation' : 'query',
    output: {
      inputs: getInputs(resolver.args, true),
    },
    outputTypes: {
      inputs: getInputs(resolver.args, false),
      output: output,
    },
    variables: getQueryArgs(resolver.args).join('\n'),
  });
  writeFile(`__tests__/api/tests/generated/${resolver.name}.test.js`, text);
}
export default async function () {
  const schema = await loadSchema('http://localhost:6200/graphql', {
    loaders: [new UrlLoader()],
  }).catch((err) => {
    throw new Error(err.message);
  });

  if (!schema) {
    throw new Error('Schema not found');
  }

  const [existingMutations, existingQueries] = [
    schema.getMutationType(),
    schema.getQueryType(),
  ];

  if (!existingMutations || !existingQueries) {
    throw new Error('Schema does not have mutations or queries');
  }

  const [mutations, queries] = [
    Object.values(existingMutations.getFields()),
    Object.values(existingQueries.getFields()),
  ];

  queries.map((resolver) => generateTest(resolver, false));
  mutations.map((resolver) => generateTest(resolver, true));
}
