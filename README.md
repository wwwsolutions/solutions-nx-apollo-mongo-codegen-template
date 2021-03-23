# solutions-nx-apollo-mongo-codegen-template

- Part 1

  [Derek Fong: How To Integrate an Apollo GraphQL Server with MongoDB and TypeScript Code Generator (Part 1)](https://medium.com/free-code-camp/build-an-apollo-graphql-server-with-typescript-and-webpack-hot-module-replacement-hmr-3c339d05184f)

- Part 2

  [Derek Fong: How To Integrate an Apollo GraphQL Server with MongoDB and TypeScript Code Generator (Part 2)](https://medium.com/free-code-camp/build-an-apollo-graphql-server-with-typescript-and-webpack-hot-module-replacement-hmr-3c339d05184f)

## Additional Guides

### Configure loading `.graphql` files directly

1. Add a `type-defs.graphql` file in `apps/graphql-api/src` folder.

2. Expand Webpack config with following config:

   ```javascript
     # apps/graphql/webpack.config.ts
     module.exports = (config, context) => {
       return {
         ...config,
         module: {
           ...config.module,
           rules: [
             ...config.module.rules,
             {
               test: /\.graphql?$/,
               use: [
                 {
                   loader: 'webpack-graphql-loader',
                   options: {
                     // validate: true,
                     // schema: "./path/to/schema.json",
                     // removeUnusedFragments: true
                     // etc. See "Loader Options" below
                   },
                 },
               ],
             },
           ],
         },
         node: {
           process: true,
           global: true,
         },
       };
     };

   ```

   This adds `webpack-graphql-loader` so files with `.graphql` extensions can be loaded.

3. In `workspace.json`, add following field:

   ```javascript
     # projects/graphql-api/architect/build/options
     "webpackConfig": "apps/graphql-api/webpack.config.ts"
   ```

4. Add `graphql.d.ts` to root folder:

   ```javascript
     # graphql.d.ts
     declare module '*.graphql' {
       import { DocumentNode } from 'graphql';

       const value: DocumentNode;
       export = value;
     }
   ```

5. Change following line:

   ```javascript
     # apps/graphql-api/src/main.ts

     ...
     import * as typeDefs from './type-defs.graphql';
     ...
   ```

**Sources:**

[Extend/Change the webpack configuration used to build apps](https://connect.nrwl.io/app/cookbook/4CjE7wgoOyYU3ri08GCAr7)

## TODOS

TODO: configure to load different environments based on `NODE_ENV`
