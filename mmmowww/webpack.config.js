const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
    },
  },

  module: {
    rules: [
        { 
          test: /\.jsx?$/, 
          exclude: /node_modules/, 
          loader: "babel-loader"
        }
    ]
  },
  

  plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'src', 'index.html'),
          filename: 'index.html',
      }),
  ],
};