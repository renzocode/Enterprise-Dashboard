const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry : {
		main : './src/bundle/index.js',
    create :'./src/bundle/crud/bundle-create.js',
	},
	output : {
		path : path.join(__dirname, 'public'),
		publicPath : '/',
		filename : 'apps/[name]/build/bundle.js'
	},
	target : 'web',
	devtool : '#source-map',
	module : {
		rules : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				use : {
					loader : "babel-loader"
				}
			},
			{
				test : /\.html$/,
				use : [
					{
						loader : "html-loader"
					}
				]
			},
			{
				test : /\.css$/,
				use : ['style-loader', 'css-loader']
			},
			{
				test : /\.(png|svg|jpg|gif)$/,
				use : ['file-loader']
			},
			 {
          		test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
          		use: ['file-loader', 'url-loader']
        	}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : "./src/html/index.html",
			filename: "./index.html",
      //inject : 'true',
      //chunks : ['index'],
      //chunksSortMode : 'dependency',
      excludeChunks : ['server']
		}),
		new HtmlWebpackPlugin({
			template : "./src/html/create.html",
      inject : 'false',
      chunks : ['create'],
      //chunksSortMode : 'dependency',
      filename : "./pages/create.html"
			//excludeChunks : ['server']
		})
	]

}
