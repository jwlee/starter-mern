var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	entry: './app/client/src/index.js',
	output: {
		path: path.resolve(__dirname, 'app/client/dist'),
		filename: 'index_bundle.js',
	},
	devServer: {
		inline: true,
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
        use: ['style-loader', 'css-loader']
      },
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(png|jpg|gif|jpeg|svg|)$/,
			  use: ["file-loader?name=img/img-[hash:6].[ext]"]
			},
			{
				test: /\.(mp4|ogg)$/,
				use: ["file-loader?name=video/video-[hash:6].[ext]"]
			}
		]
	},
	plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'app/client/src/index.html')
    })
  ]
}
