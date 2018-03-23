Console tools: https://developer.mozilla.org/en-US/docs/Web/API/console
console.log, console.info and console.error

JS is a loosely typed language
To validate: https://www.jslint.com/ OR http://jshint.com/
jslint is too opinionated, unlike jshint

For atom: use ESLint (https://eslint.org/) or XO (https://github.com/xojs/xo)

`npm install -g eslint; npm init; eslint --init` and then install on Atom the
package `linter-eslint`

After finishing your code, you may need to minify your script. Minification
of javascript means removing all unnecessary whitespace, comments, and optimizing
the code so its easier to download and run for the browser. This also makes the
code completely unreadable for humans. So typically you minify the code, put it
into a separate file and then reference that file from index.html or whatever
main document you are using. (name could be `script.min.js`)
For example: https://www.minifier.org/
