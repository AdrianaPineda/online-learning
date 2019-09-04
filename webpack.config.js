const path = require("path");
module.exports = {
    entry: "./index.js",
    mode: "development",
    output: {
        // filename: 'bundle.js'
        // __dirname is a variable tha must be set by webpack
        path: path.resolve(__dirname),
        filename: "bundle.js"
    }
};
