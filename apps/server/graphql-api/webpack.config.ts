// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
