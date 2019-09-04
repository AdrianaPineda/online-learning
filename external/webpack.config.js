const path = require("path");
module.exports = {
    entry: path.resolve(__dirname, "index.js"),
    mode: "development",
    output: {
        // filename: 'bundle.js'
        // __dirname is a variable tha must be set by webpack
        path: path.resolve(__dirname, "dist"),
        // dist is the standard name for compiled files folder
        filename: "bundle.js"
    }
};
