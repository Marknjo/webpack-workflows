const merge = require("webpack-merge");
const common = require("./webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssestsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const glob = require("glob");
const path = require("path");
const PATHS = {
	src: path.join(__dirname, "../src"),
};

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
			chunkFilename: "[id].css",
		}),
		new PurgecssPlugin({
			paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
		}),
	],
});
