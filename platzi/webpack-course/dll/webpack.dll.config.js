const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        modules: ["react", "react-dom"]
    },
    mode: "production", // "development" mode makes files heavier
    output: {
        // filename: 'bundle.js'
        // __dirname is a variable tha must be set by webpack
        path: path.resolve(__dirname, "dist"),
        // dist is the standard name for compiled files folder
        filename: "js/[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            name: "[name]",
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ]
};
