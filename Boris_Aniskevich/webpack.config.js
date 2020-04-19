const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html'), 
    filename: 'index.html',
})

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        htmlPlugin,
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devServer: {
        port: 8080,
        open: true,
        proxy: {
          '/api': 'http://localhost:3000',
        },
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}