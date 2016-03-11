var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    context: path.join(__dirname),
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
              root: __dirname,
        }),
        new CopyWebpackPlugin([{
            from: 'server',
            to: 'server'
        }, {
            from: 'index.html',
            to: 'index.html'
        }])
    ],
    module: {
        loaders: [
        {
            test: /\.js$/,
            loader: 'react-hot',
            include: path.join(__dirname, 'src')
        }, {
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            },
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }, {
            test: /\.json$/,
            loader: 'json'
        }]
    }
};
