const path = require("path");
module.exports = {
    entry: "./index.js",
    output: {
        // filename: 'bundle.js'
        // __dirname is a variable tha must be set by webpack
        path: path.resolve(__dirname),
        filename: "bundle.js"
    }
};
