const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		script: './development/main.js'
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/production'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader,"css-loader"]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
		  filename: "styles.css"
		})
	  ],
};