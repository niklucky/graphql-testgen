# Graphql API-tests generator

Based on your schema.

🚧 Early development stage

## Commands

```
graphql-testgen -g
```

## Configuration

### Configuration file `testgen.js`

```js
module.exports = {
  schemaPath: 'http://localhost:3000/graphql',
  outputDir: '__tests__/generated/',
  mockDir: '__tests__/api/mocks/',
  depth: 4,
}
```