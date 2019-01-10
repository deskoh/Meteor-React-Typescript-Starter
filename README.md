# Meteor React Typescript Starter Project

## Meteor Packages

`barbatus:typescript`: To support TypeScript.

`ecmascript`: Required for if source contains JavaScript files. Can be removed if using TypeScript fully.

## Meteor Typings

Meteor TypeScript definitions are stored in `@types` folder, which are included in `typeRoots` option in `tsconfig.json`.

> Note: As described in this [issue](https://github.com/Microsoft/TypeScript/issues/22217), TypeRoots is a support added for back compat with [typings](https://github.com/typings/typings) and to allow migration. However [meteor typings](https://github.com/meteor-typings) have not been updated to new typings workflow.

## TypeScript Config

`tsconfig.json`: Files in `client` and `server` are included in TypeScript transpilation. Files in `imports` will be transitively transpiled when imported by files in `client` and `server` folder. However, for TypesScript compiler settings in `tsconfig.json` to apply to 'orphaned' files in `imports` directory (i.e. files that not imported), the `imports` folder is included as well.

## VS Code Debugging

Default timeout when attaching to new meteor debug instance is 30 seconds. To increase if needed. Alternatively run `npm run debug` and attach manually.

Chrome Debugging requires [`chrome`](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) VS Code extension.

## Starting Project

```bash
meteor npm install
# Run project
meteor run
# Run in debug mode
meteor npm run debug
```
