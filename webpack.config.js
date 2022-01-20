const path = require('path');
const HTMLWebpackPlugin  = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env',
            ],
    }
    if (preset) {
        opts.presets.push(preset)
    }

    return opts;
}

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    devServer: {
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/assets'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(s[ac]ss)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            }, 
            {
                test: /\.(png|jpg|jpeg)$/,
                use: ['file-loader'],
            },  
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions(),
                }
            },  
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-typescript')
                }
            },  
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: babelOptions('@babel/preset-react')
                }
            },  
        ]
    },
}