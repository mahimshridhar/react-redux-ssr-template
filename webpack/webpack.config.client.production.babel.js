import path from "path";
import webpack from "webpack";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

import { clientConfiguration } from "universal-webpack";
import settings from "./universal-webpack-settings";
import baseConfiguration from "./webpack.config";

const configuration = clientConfiguration(baseConfiguration, settings);

configuration.devtool = "source-map";
configuration.mode = "production";

// Minimize CSS.
// https://github.com/webpack-contrib/mini-css-extract-plugin#minimizing-for-production
configuration.optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      parallel: true,
    }),
    new OptimizeCSSAssetsPlugin({}),
  ],
};

configuration.entry = "./src/main.jsx";

configuration.plugins.push(
  // Clears the output folder before building.
  new CleanWebpackPlugin()

  // Use `--analyze` CLI option of webpack instead.
  // // Shows the resulting bundle size stats (too).
  // // https://github.com/webpack-contrib/webpack-bundle-analyzer
  // new BundleAnalyzerPlugin({
  //   // The path is relative to the output folder
  //   reportFilename : '../bundle-stats-2.html',
  //   analyzerMode   : 'static',
  //   openAnalyzer   : false
  // })
);

export default configuration;
