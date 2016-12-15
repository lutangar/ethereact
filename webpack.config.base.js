'use strict';

var path = require('path');

module.exports = {
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/,
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  },
  entry: path.join(__dirname, './src/js/client/index.js'),
  output: {
    path: path.join(__dirname, './public/js'),
    publicPath: './public/',
    filename: 'er.js',
  },
  resolve: {
    extensions: ['', '.js']
  }
};
