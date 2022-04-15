const path = require("path");
const common = require("./webpack.config");
const merge = require("webpack-merge");
const exportCSS = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const minimizeJS = require("terser-webpack-plugin");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "scripts/[name].[chunkhash].js",
  },
  plugins: [
    new exportCSS({
      filename: "[name].[chunkhash].css",
    }),
    new CleanWebpackPlugin(),
  ],

  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new minimizeJS()],
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [exportCSS.loader, "css-loader", "sass-loader"],
      },
    ],
  },
});
