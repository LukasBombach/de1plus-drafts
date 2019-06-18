const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withTypescript = require("@zeit/next-typescript");
const withLess = require("@zeit/next-less");

module.exports = withPlugins([
  withCSS,
  [
    withLess,
    {
      lessLoaderOptions: {
        javascriptEnabled: true
      }
    }
  ],
  withTypescript
]);
