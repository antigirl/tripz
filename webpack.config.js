var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.join(__dirname),
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:8000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
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
