const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
	devServer: {
		compress: true,
		open: true,
		hot: true,
		port: 8080,
		watchContentBase: true
	},
	devtool: "cheap-module-eval-source-map",
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
					"css-loader",
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
