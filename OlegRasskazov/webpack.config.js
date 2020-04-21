const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	resolve: {
		extensions: [".js", ".json", ".jsx", ".css"],
	},

	module: {
		rules: [
			{
				test: /\.(js|jsx|json)$/,
				exclude: /node_modules/,
				loaders: [
						"babel-loader",
						"json-loader"
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
					template: path.resolve(__dirname, 'src', 'index.html'),
					filename: 'index.html',
				},
		),
	]
};