'use strict';
const path = require('path');
const config = require('../config');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    lmui: './src/index.js',
    example: './example/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    libraryTarget: 'umd',
    library: {
      root: 'LMUI',
      amd: 'lmfe.ui',
      commonjs: 'lmfe.ui'
    },
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.less'],
    alias: {
      '@common': resolve('src/common'),
      '@components': resolve('src/components'),
      '@lmui': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('example')]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('example')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        include: [resolve('src'), resolve('example')]
        // options: {
        //     // minimize: true
        // }
      }
    ]
  }
};
