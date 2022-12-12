import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { JsonFileLoader } from '@graphql-tools/json-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { UrlLoader } from '@graphql-tools/url-loader';
import { GraphQLField } from 'graphql';
import { TConfigOptions } from '../types/cli';
import {
  getInputs,
  getQueryArgs,
  getQueryFields,
  getReturnTypeFields,
  writeFile,
} from './helpers';
import { generateOutput } from './templates';
function generateTest(
  resolver: GraphQLField<never, never, never>,
  isMutation = true,
  config: TConfigOptions,
) {
  const { append, depth, mockDir, outputDir } = config;
  const fields = getReturnTypeFields(resolver.type);

  let output = '';

  if (fields) {
    output = `{
      ${getQueryFields(fields, depth)}
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
  writeFile(`${outputDir}${resolver.name}.test.js`, text, append);
}

function getSchemaType(schemaUrlOrPath: string) {
  if (schemaUrlOrPath.endsWith('.json')) {
    return JsonFileLoader;
  }
  if (schemaUrlOrPath.endsWith('.graphql')) {
    return GraphQLFileLoader;
  }
  return UrlLoader;
}

export default async function (config: TConfigOptions) {
  const { schemaPath: schemaUrlOrPath } = config;

  const SchemaType = getSchemaType(schemaUrlOrPath);

  const schema = await loadSchema(schemaUrlOrPath, {
    loaders: [new SchemaType()],
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

  queries.map((resolver) => generateTest(resolver, false, config));
  mutations.map((resolver) => generateTest(resolver, true, config));
  return mutations.length + queries.length;
}
