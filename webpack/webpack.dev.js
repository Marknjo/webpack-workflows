const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  devServer: {
    compress: true,
    open: true,
    hot: true,
    port: 8080,
    watchContentBase: true,
  },
  devtool: "eval-cheap-module-source-map",
  mode: "development",
  output: {
    filename: `[name].bundle.js`,
  },
  module: {
    rules: [
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
});
