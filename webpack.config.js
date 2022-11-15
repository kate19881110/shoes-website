/**
 * path.resolve 相對位置轉換成絕對位置
 * path.resolve(__dirname, 'dist')=> 解決跨系統解決資料夾路徑問題
 */
const path = require("path"); // node.js 裡面一個功能

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
};