const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "./dist"),
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"]
						}
					}
				],

			}
		]
	}
}