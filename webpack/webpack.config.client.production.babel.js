import path from "path";
import webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { clientConfiguration } from "universal-webpack";
import settings from "./universal-webpack-settings";
import baseConfiguration from "./webpack.config";

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const configuration = clientConfiguration(baseConfiguration, settings);

configuration.devtool = "source-map";
configuration.mode = "production";

configuration.optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      parallel: true,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
};

const modifiedRules = configuration.module.rules.map((rule) => {
  if (rule.use.includes("style-loader")) {
    return {
      ...rule,
      use: [MiniCssExtractPlugin.loader, "css-loader"],
    };
  } else {
    return rule;
  }
});

configuration.module.rules = modifiedRules;

configuration.entry = "./src/main.jsx";
configuration.plugins.push(
  // Clears the output folder before building.
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin()
);

export default configuration;
