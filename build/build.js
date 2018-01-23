'use strict'
const path = require('path');
const chalk = require('chalk');
const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const extractLess = new ExtractTextPlugin({
    filename: "[name].css"
});

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

webpack({
    context: path.resolve(__dirname, '../'),
    entry: {
        lmui: './src/index.js',
        test: './test/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/',
        libraryTarget: "umd",
        library: {
            root: "LMUI",
            amd: "lmfe.ui",
            commonjs: "lmfe.ui"
        },
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.less'],
        alias: {}
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [resolve('src'), resolve('test')]
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('test')]
        }, {
            test: /\.less$/,
            use: extractLess.extract({
                use: [{
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                    }
                }, {
                    loader: 'less-loader'
                }, {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('postcss-cssnext')()
                        ]
                    }
                }],
                fallback: "style-loader"
            })
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[ext]'
            }
        }, {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'media/[name].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'fonts/[name].[ext]'
            }
        }, {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                // minimize: true
            }
        }]
    },
    plugins: [
        extractLess,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // if you are using ts-loader, setting this to true will make tyescript errors show up during build
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'))
        process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
    ))
});

