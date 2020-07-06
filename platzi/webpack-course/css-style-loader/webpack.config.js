const path = require("path");
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
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
