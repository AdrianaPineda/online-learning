const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        home: path.resolve(__dirname, "src/js/index.js")
    },
    mode: "development",
    output: {
        // filename: 'bundle.js'
        // __dirname is a variable tha must be set by webpack
        path: path.resolve(__dirname, "dist"),
        // dist is the standard name for compiled files folder
        filename: "js/[name].js"
    },
    devServer: {
        hot: true,
        open: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    // not needed if we use the micssextractplugin (reads css from html directly)
                    // but right now, for development we need it to be fast, hence we are using
                    // style-loader again ^
                    // {
                    //     loader: MiniCSSExtractPlugin.loader
                    // },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Plugins"
        }) // adds html to dist folder
        // It is faster if we dont use this:
        // new MiniCSSExtractPlugin({
        //     filename: "css/[name].css"
        // }) // exports css file, instead of injecting it with html (see css-style-loader)
    ]
};
