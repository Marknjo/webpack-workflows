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
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assests/images",
          },
        },
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assests/videos",
          },
        },
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            // Using file-loader too
            loader: "file-loader",
            options: {
              outputPath: "assests/fonts",
            },
          },
        ],
      },
    ],
  },
};
