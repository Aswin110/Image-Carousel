const path = require('path');

module.exports = {
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
	},
	mode: 'development',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		assetModuleFilename: 'images/[hash][ext][query]'
	},
	optimization: {
		runtimeChunk: 'single',
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
};