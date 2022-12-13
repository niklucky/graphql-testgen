import fs from 'fs';
import {
  GraphQLArgument,
  GraphQLEnumType,
  GraphQLFieldMap,
  GraphQLInputObjectType,
  GraphQLInputType,
  GraphQLInterfaceType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLOutputType,
  GraphQLScalarType,
  GraphQLUnionType
} from 'graphql';
import { DEFAULT_VERSION, MAX_DEPTH } from '../constants';

type TField =
  | GraphQLFieldMap<any, any>
  | GraphQLScalarType<unknown, unknown>
  | GraphQLObjectType<any, any>
  | GraphQLInterfaceType
  | GraphQLUnionType
  | GraphQLEnumType;

function getValueBasedOnScalar(type: GraphQLScalarType) {
  switch (type.name) {
    case 'String':
      return '"test"';
    case 'Int':
      return '0';
    case 'Float':
      return '0.0';
    case 'Boolean':
      return 'false';
    case 'ID':
      return '"test"';
    case 'DateTime':
      return '"2021-01-01T00:00:00.000Z"';
    default:
      return 'null';
  }
}
function getReturnTypeFields(
  type: GraphQLOutputType,
): GraphQLFieldMap<any, any> | '' {
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
function getValueBasedOnType(type: GraphQLInputType): string {
  if (type instanceof GraphQLScalarType) {
    return getValueBasedOnScalar(type);
  }
  if (type instanceof GraphQLEnumType) {
    return `"${type.getValues()[0].value}"`;
  }
  if (type instanceof GraphQLInputObjectType) {
    return `{${Object.values(type.getFields())
      .map((field) => {
        return `${field.name}: ${getValueBasedOnType(field.type)}`;
      })
      .join(',\n')}}`;
  }
  if (type instanceof GraphQLList) {
    return getValueBasedOnType(type.ofType);
  }
  if (type instanceof GraphQLNonNull) {
    return getValueBasedOnType(type.ofType);
  }
  return 'null';
}
function getFieldsBasedOnType(
  type: GraphQLOutputType,
  depth = 0,
  maxDepth = MAX_DEPTH,
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
    return `{${Object.values(type.getFields())
      .map((field) => {
        const row = getFieldsBasedOnType(field.type, depth, maxDepth);
        if (row != null) {
          return `${field.name} ${row}`;
        }
        return '';
      })
      .join('\n')}}`;
  }
  if (type instanceof GraphQLList) {
    return getFieldsBasedOnType(type.ofType, depth,maxDepth);
  }
  if (type instanceof GraphQLNonNull) {
    return getFieldsBasedOnType(type.ofType, depth,maxDepth);
  }
  return '';
}
function getQueryFields(fields: TField, maxDepth: number) {
  return Object.values(fields)
    .map((field) => {
      return `${field.name} ${getFieldsBasedOnType(field.type, 0, maxDepth)}`;
    })
    .join('\n       ');
}

function getQueryArgs(args: readonly GraphQLArgument[]) {
  return args.map((arg) => {
    return `${arg.name}: ${getValueBasedOnType(arg.type)}`;
  });
}
function getInputs(args: readonly GraphQLArgument[], main: boolean) {
  if (!args.length) return '';

  return `(${args.map(
    (arg) =>
      `${main ? '$' : ''}${arg.name}: ${!main ? '$' : ''}${
        !main ? arg.name : arg.type
      }`,
  )})`;
}

function writeFile(source: string, text: string, append: boolean) {
  if (fs.existsSync(source) && append) {
    let i = 0;
    while (fs.existsSync(source)) {
      i++;
      if (!source.match(/(\d+)(?!.*\d)/g)) {
        const splited = source.split('/');
        const file = source.split('/')[splited.length - 1].split('.')[0];
        source = `${splited
          .slice(0, -1)
          .join('/')}/${file}.${DEFAULT_VERSION}.test.js`;
      }
      source = source.replace(/(\d+)(?!.*\d)/g, (match) => {
        return String(Number(match) + 1);
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
