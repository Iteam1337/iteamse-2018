"use strict";

module.exports = {
  modify(baseConfig, { target, dev }, webpack) {
    const config = Object.assign({}, baseConfig);

    config.resolve.extensions = config.resolve.extensions.concat([
      ".ts",
      ".tsx",
    ]);

    // Turn off webpack-hints for Travis build
    if (!dev) {
      config.performance = Object.assign(
        {},
        {
          hints: false,
          maxAssetSize: 100000,
          maxEntrypointSize: 300000,
        },
      );
    }

    config.devtool = "cheap-module-source-map";

    // Locate eslint-loader and remove it (we're using tslint instead)
    config.module.rules = config.module.rules.filter(
      rule =>
        !(
          Array.isArray(rule.use) &&
          rule.use.length > 0 &&
          rule.use[0].options &&
          "useEslintrc" in rule.use[0].options
        ),
    );

    // Safely locate Babel-Loader in Razzle's webpack internals
    const babelLoader = config.module.rules.findIndex(
      rule => rule.use[1].options && rule.use[1].options.babelrc,
    );

    // Get the correct `include` option, since that hasn't changed.
    // This tells Razzle which directories to transform.
    const { include } = config.module.rules[babelLoader];

    // Declare our TypeScript loader configuration
    const tsLoader = {
      include,
      loader: require.resolve("ts-loader"),
      test: /\.tsx?$/,
    };

    const tslintLoader = {
      enforce: "pre",
      include,
      loader: require.resolve("tslint-loader"),
      options: {
        configFile: "./tslint.json",
        emitErrors: true,
      },
      test: /\.tsx?$/,
    };

    config.module.rules.push(tslintLoader);

    // Fully replace babel-loader with ts-loader
    config.module.rules[babelLoader] = tsLoader;

    // If you want to use Babel & Typescript together (e.g. if you
    // are migrating incrementally and still need some Babel transforms)
    // then do the following:
    //
    // - COMMENT out line 59
    // - UNCOMMENT line 68
    //
    // config.module.rules.push(tsLoader)

    return config;
  },
};
