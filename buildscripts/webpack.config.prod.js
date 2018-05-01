'use strict';

const webpack = require('webpack');
const configHelper = require("./configHelper");
const path = require('path');

const isDebug = false;

const config = {
    entry: configHelper.getEntry('app', isDebug, 3002),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].bundle.min.js",
        jsonpFunction: 'rsfe_webpackJsonp'
    },
    resolve: {
        // Specify directories for where to look for modules
        modules: [
            "node_modules"
        ],
        extensions: configHelper.extensions
	},
    module: configHelper.getLoaders(isDebug),
    plugins: configHelper.getPlugins(['app'], false, isDebug, true),
    stats: {
        children: false,
        colors: true,
        modules: false
    },
    devtool: 'inline-source-map'
};

module.exports = config;