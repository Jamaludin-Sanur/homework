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
				use: ['style-loader','css-loader']
			}
		]
	}
};