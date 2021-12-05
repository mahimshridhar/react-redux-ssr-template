const webpack = require("webpack");

const injectVariables = new webpack.EnvironmentPlugin({
  process: {
    env: {
      NODE_ENV: JSON.stringify("development"),
      BROWSER: JSON.stringify("true"),
      SERVER: JSON.stringify("false"),
    },
  },
});

module.exports = {
  mode: "production",
  entry: "./src/main.jsx",
  output: {
    path: __dirname + "/src/",
    filename: "browser.js",
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
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".css", ".es6"],
  },
  plugins: [injectVariables],
};
