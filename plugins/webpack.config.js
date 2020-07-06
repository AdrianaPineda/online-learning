const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // "style-loader", not needed anymore, we will read css from html directly
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Plugins"
        }), // adds html to dist folder
        new MiniCSSExtractPlugin({
            filename: "css/[name].css"
        }) // exports css file, instead of injecting it with html (see css-style-loader)
    ]
};
