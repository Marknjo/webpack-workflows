//import { cleanWebpackPlugin } from "clean-webpack-plugin";

const merge = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssestsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
	devtool: "hidden-source-map",
	mode: "development",

	output: {
		filename: `[name].[contenthash].bundle.js`,
	},

	module: {
		rules: [
			{
				test: /\.(sc|sa|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
		],
	},

	optimization: {
		minimizer: [
			new TerserJSPlugin({}),
			new OptimizeCssAssestsWebpackPlugin({}),
		],
	},

	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
});
