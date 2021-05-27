const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/scripts/vendor/vendor.js",
  },
  output: {
    path: path.resolve(__dirname, "../public/"),
    publicPath: "",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      scriptLoading: "defer",
    }),
    new DashboardPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(?:ico|svg|png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assests/images/[name].[hash].[ext]",
        },
      },
      {
        test: /\.(mp4|webm)$/,
        type: "asset/resource",
        generator: {
          filename: "assests/videos/[name].[hash].[ext]",
        },
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: "asset/resource",
        generator: {
          filename: "assests/fonts/[name].[hash].[ext]",
        },
      },
    ],
  },
};
