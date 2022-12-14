import fs from 'fs';
import type {
  GraphQLArgument,
  GraphQLFieldMap,
  GraphQLInputType,
  GraphQLInterfaceType,
  GraphQLOutputType,
  GraphQLUnionType
} from 'graphql';
import {
  GraphQLEnumType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType
} from 'graphql';
import {
  DEFAULT_VERSION,
  DEFAULT_VERSION_INCREMENT,
  MAX_DEPTH
} from '../constants';

type TField =
  | GraphQLFieldMap<unknown, unknown>
  | GraphQLScalarType<unknown, unknown>
  | GraphQLObjectType<unknown, unknown>
  | GraphQLInterfaceType
  | GraphQLUnionType
  | GraphQLEnumType;

export function getTypeBasedOnScalar(
  type: GraphQLScalarType
): string | undefined {
  if (type instanceof GraphQLList) {
    return getTypeBasedOnScalar(type.ofType);
  }
  if (type instanceof GraphQLNonNull) {
    return getTypeBasedOnScalar(type.ofType);
  }
  switch (type.name) {
    case 'String':
      return 'String';
    case 'Int':
      return 'Number';
    case 'Float':
      return 'Number';
    case 'Boolean':
      return 'Boolean';
    case 'ID':
      return 'String';
    case 'DateTime':
      return 'Date';
    default:
      return undefined;
  }
}

function getValueBasedOnScalar(type: GraphQLScalarType) {
  switch (type.name) {
    case 'String':
      return '"test"';
    case 'Int':
      return '1';
    case 'Float':
      return '1.0';
    case 'Boolean':
      return 'true';
    case 'ID':
      return '"3dea8772-3595-46f7-8520-4ce2cfff6d62"';
    case 'DateTime':
      return `"${new Date().toISOString()}"`;
    default:
      return 'null';
  }
}
function getReturnTypeFields(
  type: GraphQLOutputType
): GraphQLFieldMap<unknown, unknown> | '' {
  if (type instanceof GraphQLScalarType) {
    return '';
  }
  if (type instanceof GraphQLEnumType) {
    return '';
  }
  if (type instanceof GraphQLObjectType) {
    return type.getFields();
  }
  if (type instanceof GraphQLList) {
    return getReturnTypeFields(type.ofType);
  }
  if (type instanceof GraphQLNonNull) {
    return getReturnTypeFields(type.ofType);
  }

  return '';
}
function getValueBasedOnType(type: GraphQLInputType, depth = 0): string {
  if (type instanceof GraphQLScalarType) {
    return getValueBasedOnScalar(type);
  }
  if (type instanceof GraphQLEnumType) {
    return `"${type.getValues()[0].value}"`;
  }
  if (type instanceof GraphQLInputObjectType) {
    ++depth;

    return `{\n    ${Object.values(type.getFields())
      .map(field => {
        return `${depth >= 2 ? duplicate('  ', depth) : '  '}${field.name
          }: ${getValueBasedOnType(field.type, depth)}`;
      })
      .join(',\n    ')}\n${duplicate('  ', depth + 1)}}`;
  }
  if (type instanceof GraphQLList) {
    return getValueBasedOnType(type.ofType, depth);
  }
  if (type instanceof GraphQLNonNull) {
    return getValueBasedOnType(type.ofType, depth);
  }

  return 'null';
}
function duplicate(str: string, count: number) {
  return Array(count).fill(str).join('');
}
function getFieldsBasedOnType(
  type: GraphQLOutputType,
  depth = 0,
  maxDepth = MAX_DEPTH
): string | null {
  if (depth > maxDepth) return null;

  if (type instanceof GraphQLScalarType) {
    return '';
  }
  if (type instanceof GraphQLEnumType) {
    return '';
  }
  if (type instanceof GraphQLObjectType) {
    if (depth + 1 > maxDepth) return null;
    ++depth;

    return `{\n      ${Object.values(type.getFields())
      .map(field => {
        const row = getFieldsBasedOnType(field.type, depth, maxDepth);

        if (row != null) {
          return `${depth >= 2 ? duplicate('  ', depth - 1) : ''}${field.name
            } ${row}`;
        }

        return '';
      })
      .join('\n      ')}\n${duplicate('  ', depth + 1)}}`;
  }
  if (type instanceof GraphQLList) {
    return getFieldsBasedOnType(type.ofType, depth, maxDepth);
  }
  if (type instanceof GraphQLNonNull) {
    return getFieldsBasedOnType(type.ofType, depth, maxDepth);
  }

  return '';
}
function getQueryFields(fields: TField, maxDepth: number) {
  return Object.values(fields)
    .map(field => {
      return `${field.name} ${getFieldsBasedOnType(field.type, 0, maxDepth)}`;
    })
    .join('\n    ');
}

function getQueryArgs(
  args: readonly GraphQLArgument[]
): ([string, string] | undefined)[] {
  return args.map(arg => {
    return [arg.name, getValueBasedOnType(arg.type)];
  });
}
function getInputs(args: readonly GraphQLArgument[], main: boolean) {
  if (!args.length) return '';

  return `(${args.map(
    arg =>
      `${main ? '$' : ''}${arg.name}: ${!main ? '$' : ''}${!main ? arg.name : arg.type
      }`
  )})`;
}

function writeFile(source: string, text: string, append: boolean) {
  if (fs.existsSync(source)) {
    if (!append) {
      return;
    }
    while (fs.existsSync(source)) {
      if (!source.match(/(\d+)(?!.*\d)/g)) {
        const splited = source.split('/');
        const file = source.split('/')[splited.length - 1].split('.')[0];

        source = `${splited
          .slice(0, -1)
          .join('/')}/${file}.${DEFAULT_VERSION}.test.js`;
      }
      source = source.replace(/(\d+)(?!.*\d)/g, match => {
        return String(Number(match) + DEFAULT_VERSION_INCREMENT);
      });
    }
  }
  const dir = source.split('/').slice(0, -1).join('/');

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(source, text);
}
export {
  getQueryArgs,
  getQueryFields,
  getReturnTypeFields,
  getInputs,
  writeFile,
};
