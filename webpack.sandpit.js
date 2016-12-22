var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	devtool: 'cheap-eval-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:' + process.env.PORT,
		'webpack/hot/dev-server',
		'./src/sandpit/sandpit'
	],
	output: {
		path: path.join(__dirname, 'dist.sandpit'),
		filename: 'sandpit.bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: './src/sandpit/sandpit.html'
		})
	],
	module: {
		loaders: [{
			test: /\.css$/,
			loaders: ['style', 'css']
		}, {
			test: /\.html$/,
			loader: "raw-loader" // loaders: ['raw-loader'] is also perfectly acceptable.
		}]
	},
	devServer: {
		contentBase: './dist.sandpit',
		hot: true,
	},
}
