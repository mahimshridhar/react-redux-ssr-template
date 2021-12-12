// Base Webpack configuration.
//
// Not using ES6 syntax here because this file
// is not processed with Babel on server side.
// See `./rendering-service/index.js` for more info.

const path = require("path");
const webpack = require("webpack");

const configuration = require("../configuration");
const setupConfiguration = require("../configuration/setup");

const ROOT_DIRECTORY = path.resolve(__dirname, "..");

module.exports = {
  // Resolve all relative paths from the project root folder
  context: ROOT_DIRECTORY,

  output: {
    // Filesystem path for static files
    path: path.resolve(ROOT_DIRECTORY, "build/assets"),

    // Network path for static files
    publicPath: setupConfiguration.publicPath + "/",

    // Specifies the name of each output entry file
    filename: "[name].[fullhash].js",

    // Specifies the name of each (non-entry) chunk file
    chunkFilename: "[name].[fullhash].js",
  },

  module: {
    rules: [
      {
        test: /\.(jsx|es6)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },

  // Hides "Entrypoint size exeeds the recommened limit (250kB)" warnings.
  // https://github.com/webpack/webpack/issues/3486
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".es6"],
  },

  // Plugins will be added to this array by extending configurations.
};
