const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry : {
		main : './src/index.js',
	},
	output : {
		path : path.join(__dirname, 'dist'),
		publicPath : '/',
		filename : '[name].js'
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
			}
		]
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : "./src/html/index.html",
			filename: "./index.html",
			excludeChunks : ['server']
		})
	]

}