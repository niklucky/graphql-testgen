# Graphql API-tests generator

Based on your schema.

🚧 Early development stage

## Commands

```
graphql-testgen gen 
```

## Arguments
| flags | arguments | alias | description |
|---|---|---|---|
| --config | path | -c | Path to config file an example is displayed at Configuration<br><br>usage: `-c __tests__/api/testgen.js`<br>default: `./testgen.js` |
| --schema | <path> | -s | path to schema file or url path to schema<br><br>usage: `-s __tests__/api/schema.graphql`<br>default: `http://localhost:3000/graphql` |
| --output | <path> | -o | path to output<br><br>usage: `-o __tests__/generated/`<br>default: `__tests__/generated/` |
| --mocks | -m | <path> | path to mocks <br><br>usage: `-m __test__/mocks`<br>default: `__tests__/api/mocks` | 
| --append | -a | - | append to existing files <br><br>usage: `-a`<br>default: false | 


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