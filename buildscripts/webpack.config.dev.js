'use strict';

const webpack = require('webpack');
const configHelper = require("./configHelper");
const path = require('path');

const isDebug = true;

const config = {
    mode: 'development',
    entry: configHelper.getEntry(isDebug, 8080),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.js",
        publicPath: '/'
    },
    resolve: {
        // Specify directories for where to look for modules
        modules: [
            "node_modules"
        ],
        extensions: configHelper.extensions
    },
    module: configHelper.getLoaders(isDebug),
    plugins: configHelper.getPlugins(false, isDebug, false),
    stats: {
        children: false,
        colors: true,
        modules: false
    },
    context: path.resolve(__dirname, 'src'),
    devServer: {
        port: '8080',
        noInfo: true,
        quiet: false,
        contentBase: path.resolve(__dirname, 'src'),
        publicPath: '/'
    },
    watch: true
};

module.exports = config;