module.exports= {
	entry: ["./app.js", "./util.js"],
	output: {
		filename: "bundle.js"
	},
	
	//Modules
	module:{
		preLoaders:[
			{
				test: /\.js$/,
				exclude: 'node_modules',
				loader: 'jshint-loader'
			}
		],
		//Array of loaders
		loaders:[
			//Each loader is an object
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	resolve:{
		extensions: ['', '.js', '.es6']
	}
}