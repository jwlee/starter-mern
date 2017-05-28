var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var path = require('path');


//Good reference for understanding webpack 2: https://www.sitepoint.com/beginners-guide-to-webpack-2-and-module-bundling/
module.exports = {
	entry: path.join(__dirname, 'app/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: './',
		filename: 'index_bundle.js'
	},
	devServer: {
		port: 3000,
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: ["babel-loader"]
			},
			{
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'autoprefixer-loader']
      },
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader']
			},
			{
				test: /\.(png|jpg|gif|jpeg|svg|)$/,
			  use: ["file-loader?name=media/img-[hash:6].[ext]"]
			},
			{
				test: /\.(mp4|ogg)$/,
				use: ["file-loader?name=media/video-[hash:6].[ext]"]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
      root: __dirname
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app/index.html')
    })
  ]
}
