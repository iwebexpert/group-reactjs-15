const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src', 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src', 'components'),
			pages: path.resolve(__dirname, 'src' , 'pages'),
			reducers: path.resolve(__dirname, 'src', 'reducers'),
			actions: path.resolve(__dirname, 'src', 'actions'),
			containers: path.resolve(__dirname, 'src', 'containers'),
			middlewares: path.resolve(__dirname, 'src', 'middlewares')
		},
	},
	target: "web",
	optimization: {
		// We do not want to minimize our code.
		minimize: false
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	mode: 'development',

  module: {
    rules: [
        { 
          test: /\.jsx?$/, 
          exclude: /node_modules/, 
          loader: "babel-loader"
        },
		{
			test: /\.s?css$|\.sass$/i,
			use: [
				'style-loader',
				MiniCssExtractPlugin.loader,
				'css-loader', 
				'sass-loader']
		}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './', 'index.html'),
        filename: 'index.html',
    }),
	new MiniCssExtractPlugin({
		filename: 'main.css'
	}),
	new CopyPlugin([
		{from: path.resolve(__dirname, 'api'), to: path.resolve(__dirname, 'dist', 'api')},
		{from: path.resolve(__dirname, 'src', 'asserts', 'images'), to: path.resolve(__dirname, 'dist', 'images')},
		{from: path.resolve(__dirname, 'src', 'sw.js'), to: path.resolve(__dirname, 'dist')},
		{from: path.resolve(__dirname, 'src', 'manifest.json'), to: path.resolve(__dirname, 'dist')},
	])
  ],
  devServer: {
	  historyApiFallback: true
  }
};