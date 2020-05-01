const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html'), 
    filename: 'index.html',
})

const miniCssPlugin = new MiniCssExtractPlugin({
    filename: 'style.css',
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
        miniCssPlugin,
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
            {
                test: /\.module\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { 
                            modules: true,
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    devServer: {
        port: 8080,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
            },
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            reducers: path.resolve(__dirname, 'src/reducers'),
            api: path.resolve(__dirname, 'src/api'),
            components: path.resolve(__dirname, 'src/components'),
            common: path.resolve(__dirname, 'src/common'),
        },
    },
}