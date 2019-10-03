const path = require("path");
const webpack = require("webpack");
const TersetJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    entry: {
        modules: ["react", "react-dom", "react-router-dom"]
    },
    // mode: "production", // "development" mode makes files heavier
    output: {
        // filename: 'bundle.js'
        // __dirname is a variable tha must be set by webpack
        path: path.resolve(__dirname, "dist"),
        // dist is the standard name for compiled files folder
        filename: "js/[name].[hash].dll.js",
        library: "[name]"
    },
    optimization: {
        minimizer: [new TersetJSPlugin(), new OptimizeCSSAssetsPlugin()]
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ]
};
