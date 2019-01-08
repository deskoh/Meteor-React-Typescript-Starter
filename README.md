# Meteor React Typescript Starter Project

## Meteor Packages

`barbatus:typescript`: To support TypeScript.

`ecmascript`: Required for if source contains JavaScript files. Can be removed if using TypeScript fully.

## TypeScript Config

`tsconfig.json`: Files in `client` and `server` are included in TypeScript transpilation. Files in `imports` will be transitively transpiled when imported by files in `client` and `server` folder.

## VS Code Debugging

Default timeout when attaching to new meteor debug instance is 30 seconds. To increase if needed. Alternatively run `npm run debug` and attach manually.

Chrome Debugging requires [`chrome`](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) VS Code extension.

## Starting Project

```bash
meteor npm install
# Run project
meteor run
# Run in debug more
meteor npm run debug
```
