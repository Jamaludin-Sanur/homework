module.exports = {
    entry: './dev/main.js',
    output: {
      filename: 'bundle_something.js',
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