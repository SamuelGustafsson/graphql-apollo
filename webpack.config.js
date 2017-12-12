const webpack = require("webpack");

module.exports = {
	entry: "./dist/index.js",
	output: {
		path: "/",
		filename: "bundle.js",
	},
	resolve: {
		// changed from extensions: [".js", ".jsx"]
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
