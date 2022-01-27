const webpackConfig = require("../webpack.config.js");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    '@storybook/addon-interactions'
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: { ...config.module, rules: webpackConfig.module.rules },
    };
  },
};
