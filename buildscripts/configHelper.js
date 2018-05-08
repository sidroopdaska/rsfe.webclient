const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

let extensions = [
	".ts",
	".tsx",
	".js",
	".scss",
	".json"
];

function getPlugins(rtl, isDebug, minify = false) {
	let ret = [
		// new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(true),
		new webpack.NoEmitOnErrorsPlugin()
	];

	if (isDebug) {
		ret.push(new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./index.html"),
			filename: `index.html`,
			appScript: `app-bundle.js`,
		}));
	}

	if (!isDebug) {
		ret.push(new webpack.HashedModuleIdsPlugin());
		// Turn on Scope Hoisting for PROD Builds only
		ret.push(new webpack.optimize.ModuleConcatenationPlugin());
	}

	if (minify) {
		// TODO: fix
		ret.push(new UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false,
				pure_getters: true,
				passes: 3
			},
			sourceMap: true,
			mangle: {
				keep_fnames: true
			}
		}));
	}

	return ret;
}

function getLoaders(isDebug) {
	let scriptLoaders = isDebug ? [
		'babel-loader',
		'awesome-typescript-loader',
	] : ['awesome-typescript-loader'];

	let ret = {
		rules: [
			{
				test: /\.tsx?$/,
				enforce: 'pre',
				exclude: /(node_modules)/,
				loader: 'tslint-loader',
				options: {
					emitErrors: true,
					failOnHint: true,
					configFile: 'tslint.json',
					// These options are useful if you want to save output to files
					// for your continuous integration server
					fileOutput: {
						// The directory where each file's report is saved
						dir: "./webpack-log/",
						// The extension to use for each report's filename. Defaults to 'txt'
						ext: 'xml',
						// If true, all files are removed from the report directory at the beginning of run
						clean: true,
						// A string to include at the top of every report file.
						// Useful for some report formats.
						header: '<?xml version="1.0" encoding="utf-8"?>\n<checkstyle version="5.7">',
						// A string to include at the bottom of every report file.
						// Useful for some report formats.
						footer: '</checkstyle>'
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader']
			},
			// All files with a .ts or .tsx extension will be handled by 'ts-loader'
			{
				test: /\.tsx?$/,
				exclude: /(node_modules)/,
				use: scriptLoaders
			},
			{ test: /\.(jpg|png)$/, loader: "file-loader" },
			{ test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
			{ test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
		]
	};

	return ret;
}

function getEntry(isDebug, port) {
	let entry = {};

	// Note: this can be extended for handling Multi-Page-Apps
	entry['app'] =
		isDebug ? [
			// "webpack-dev-server/client?http://localhost:" + port,
			// "webpack/hot/dev-server",
			path.resolve(__dirname, `../src/layout/index.tsx`)
		] :
			path.resolve(__dirname, `../src/layout/index.tsx`);

	return entry;
}

module.exports = {
	extensions,
	getPlugins,
	getLoaders,
	getEntry
}
