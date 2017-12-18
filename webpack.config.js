var path = require("path");

module.exports = {
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	entry: "./src/client/index.tsx",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/",
	},
	module: {
		rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
	},
	devServer: {
		proxy: {
			"/graphql": "http://localhost:4000/graphql",
		},
		stats: {
			assets: false,
			hash: false,
			chunks: false,
			errors: true,
			errorDetails: true,
		},
		overlay: true,
	},
};
