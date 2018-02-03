var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

 module.exports = {
     entry: './src/app.js',
     output: {
         path: path.resolve(__dirname, './public/build'),
         filename: './bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: [
                        'react',
                        ['es2015', {'modules': false}]
                    ],
                    plugins: [
                        "add-module-exports"
                      ]
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
     node: {
        console: true,
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
     devtool: 'source-map'
 };