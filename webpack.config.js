
const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: debug ? 'inline-sourcemap' : null,
	entry: path.join(__dirname, 'app', 'www', 'js','main.js'),
	devServer: {
		inline: true,
		port: 3333,
		contentBase: "app/www",
		historyApiFallback: {
			index: '/index.html'
		}
	},
	output: {
		path: path.join(__dirname,'dist','js'),
		publicPath: "/js/",
		filename: 'main.js'
	},
	module: {
		loaders: [{
			test: /\.js?$/,
			loader: ['babel-loader'],
			exclude: [
				path.join(__dirname,'node_modules') //important for performance!
			],
			query: {
				cacheDirectory: 'babel_cache',
				plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy'],
				presets: debug ? ['react', 'es2015', "stage-0", 'react-hmre'] : ['react', 'es2015', "stage-0"]
			}
		}]
	},
	plugins: debug ? [] : [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: { warnings: false },
			mangle: true,
			sourcemap: false,
			beautify: false,
			dead_code: true
		}),
	]
};
