const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
	  })
  ],
  devServer: {
	  historyApiFallback: true
  }
};