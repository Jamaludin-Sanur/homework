const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		script: './development/main.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: __dirname + '/production'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './development/index.html',
            minify: {
                collapseWhitespace: true
            },
		})
	]

};

