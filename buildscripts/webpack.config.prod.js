'use strict';

const webpack = require('webpack');
const configHelper = require("./configHelper");
const path = require('path');

const isDebug = false;

const config = {
    mode: 'production',
    entry: configHelper.getEntry(isDebug, 3002),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.min.js",
        publicPath: 'dist/'
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
    }
};

module.exports = config;