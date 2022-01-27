/**
 * @type {Cypress.PluginConfig}
 */
const { startDevServer } = require("@cypress/webpack-dev-server");
const webpackConfig = require("../../webpack.config");

//INFO(kohearon): Although not explicitly used here 
// the @cypress/react package is required for the current 
// setup fo component testing to work correctly
module.exports = (on) => {
  on("dev-server:start", async (options) =>
    startDevServer({ webpackConfig, options })
  );
};
