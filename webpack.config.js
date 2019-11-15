const dev = process.env.NODE_ENV !== 'production'
const path = require('path');
const webpack = require('webpack')
const MiniCss = require('mini-css-extract-plugin')
const UglifyJs = require('uglifyjs-webpack-plugin')
const OptimizeCss = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: './assets/resources/index.js',
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJs({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCss({})
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/'),
    },
    plugins: [
        new MiniCss({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'jshint-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.(css|less)$/,
            use: [
                MiniCss.loader,
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {
            test: /\.(ttf|otf|eot|svg|woff(2)?)$/,
            use: ['file-loader']
        }, {
            test: /\.html$/,
            use: ['html-loader']
        }]
    }
}