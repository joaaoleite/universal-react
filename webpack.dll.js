const path 		= require("path")
const webpack 	= require("webpack")

module.exports = {
    entry: {
        vendor: [path.join(__dirname,"app","www","js","vendor.js")]
    },
    output: {
        path: path.join(__dirname, "dist","js"),
        filename: "[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "dist","js","[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname, "app")
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
    ],
    resolve: {
        root: path.resolve(__dirname, "app"),
        modulesDirectories: ["node_modules"]
    }
}
