const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            title: 'Development',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader",
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
        ],
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        static: './dist',
    },
};
