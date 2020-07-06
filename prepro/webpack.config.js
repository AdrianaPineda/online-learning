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
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.styl$/,
                use: ["style-loader", "css-loader", "stylus-loader"]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: "url-loader",
                    // this loader will convert the files into a base64 format
                    // and will embed it into the js code (inline)
                    // not recommended for big files
                    options: {
                        limit: 90000 // max bytes supported
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Plugins",
            template: path.resolve(__dirname, "index.html")
        }) // adds html to dist folder
        // It is faster if we dont use this:
        // new MiniCSSExtractPlugin({
        //     filename: "css/[name].css"
        // }) // exports css file, instead of injecting it with html (see css-style-loader)
    ]
};
