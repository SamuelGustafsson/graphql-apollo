const path = require("path");
const webpack = require("webpack");

module.exports = {
	entry: path.resolve(__dirname, "dist/client/index"),
	output: {
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" },
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
		],
	},
	devtool: "source-map",
};
