const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: path.join(__dirname, '/app/client/src/index.js'),
	output: {
		path: path.join(__dirname, '/app/client/dist/assets'),
		filename: "bundle.js",
		publicPath: "assets"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ["babel-loader"]
			},
			{
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	}
}
