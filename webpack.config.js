const dev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCss = require('mini-css-extract-plugin')
const UglifyJs = require('uglifyjs-webpack-plugin')
const OptimizeCss = require('optimize-css-assets-plugin')
const copywebpack = require('copy-webpack-plugin')

module.exports = {
    mode: dev ? 'development' : 'production',
    entry: './development/index.js',
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
        filename: 'app.js',
        path: './assets/resources'
    },
    plugins: [
        new MiniCss({
            filename: 'style.css'
        }),
        new copywebpack([
            {
                context: 'public/',
                from: '**/*.html'
            }
        ])
    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: '/node_modules',
            use: ['babel-loader']
        }, {
            test: /\.l?[ec]ss$/,
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
        }]
    }
}