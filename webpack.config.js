var path = require("path");

module.exports = {
	entry: "./client/index.tsx",
	module: {
		rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
	},
	devServer: {
		stats: {
			assets: false,
			hash: false,
			chunks: false,
			errors: true,
			errorDetails: true,
		},
		overlay: true,
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/client/",
	},
};
