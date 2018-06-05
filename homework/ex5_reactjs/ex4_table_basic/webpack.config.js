module.exports = {
    entry: './dev/main.js',
    output: {
      filename: 'bundle.js',
      path: __dirname+'/dist'
    },
    module: {
        rules: [
			{ 
				test: /\.js|jsx?$/, 
				exclude: /node_modules/, 
				loader: "babel-loader",
				options: { presets: ['env', 'react']  }
			}
		]
      }
  };