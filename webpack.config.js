const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: path.resolve(__dirname, "dist/index.js"),
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{ test: /\.(t|j)sx?$/, use: { loader: "awesome-typescript-loader" } },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
		],
	},
	devtool: "source-map",
};
