
const debug = process.env.NODE_ENV !== "production"
console.log('debug',debug)

const path 		= require("path")
const webpack 	= require("webpack")

module.exports = {
    cache: true,
    devtool: "eval",
    entry: {
        main: path.join(__dirname,"app","www","js","main.js")
    },
    output: {
        path: path.join(__dirname, "dist","js"),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    plugins: debug ? [
        new webpack.DllReferencePlugin({
            context: path.join(__dirname,"app"),
            manifest: require(path.join(__dirname,"dist","js","vendor-manifest.json"))
        })
      ] : [
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
	],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                include: [
                    path.join(__dirname,"app") //important for performance!
                ],
                query: {
                    cacheDirectory: true, //important for performance
					plugins: ['react-html-attrs','transform-class-properties','transform-decorators-legacy'],
					presets: debug ?
						['react', 'es2015', "stage-0", 'react-hmre'] :
						['react', 'es2015', "stage-0"],
                }
            }
        ]
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        root: path.resolve(__dirname, "app"),
        modulesDirectories: ["node_modules"],
    }
}
