## Webpack

WP es un Module Bundler for Modern JS Applications, es decir un empaquetador de módulos para el desarrollo de aplicaciones modernas en JavaScript.

In a regular JS app we have tons of files in different formats. Webpack transforms these files into files the browser can understand.
For example, from sass to css. For example, from modern js to js the browser can understand. It includes a list of rules to transform what developers code and understand to what the browser understands.

Webpack starts from one JS per page and from there it starts importing all modules from our app.

Supports less, sass, babel, hot reloader. Helps the app load faster

**¿Por qué usar Webpack? **

- Aunque hay otras alternativas WP es un la forma mas sofisticada para cargar y transformar módulos. WP trae todas las formas de importación de módulos, en resumen trae lo mejor de todos los mundos.

- Entrypoints - múltiples puntos de entrada a tus aplicaciones - archivos iniciales, tienes uno por cada pagina que vayas a usar.

- Puedes tener multiples entrypoints.

- OUTPUT. Si bien le decimos cual es el archivo fuente, debemos decirle que hacer con eso y donde ponerlo, porque no queremos mezclar los archivos finales que lee el navegador con los archivos fuente.

- Loaders. Nos ayudan a cargar todo tipo de formato de archivos.

- Plugins. nos ayudan a extender las caracteristicas de WP, por ejemplo comprimir archivos, dividir nuestros modulos en chunks, etc.

- WP es developer experience.

## JS Modules

We can use modules using AMD (asynchronous module definition) (require-js packages allows us to use AMD and load modules asynchronously, or just load them at a certain time)

CommonJS: module system in node.js. Bundles modules. Similar to require-js, but it doesn't load multiple files but includes everything in one file.

Webpack brings AMD + CommonJs together, to load modules

## Basic concepts

1. Entry Points

- Principal module
- Where other modules are imported
- Webpack will read this file to generate the bundle
- One entry point per page
- With webpack we can have multiple entry points

2. Output
   We don't want to mix source files to generated

- Config for result file
  - Where is that file
  - What's it name

3. Loaders

- Helps load every type of files (jpg, sass)
- Everything that is not pure (native) JS and that needs to be exported as js for the browser to understand

4. Plugins

- Help us extend webpack features, for example: Uglify to compress files, or to divide our modules in smaller chunks so our app loads faster

## Configure environment

Requirements:

- node & npm
- npm init (in terminal) > to start any js app
- Install webpack: npm install webpack --save-dev
- Install webpac-cli (for webpack 4+ we need the cli - command line interface): npm install webpack-cli --save-dev
- We can now use webpack. Check out the version: npm list webpack. `webpack -v` won't work cause we don't have it installed globally
- `npx webpack -v` checks the installed version of webpack in the current directory
- Our entry point: index.js (files used for development)
- Configure file that I would webpack to traspile > `npx webpack --entry ./index.js --output ./bundle.js`. `webpack <entry:index.js> <output:bundle.js>`
- Our output: bundle is the final product for the browser
- webpack mode: dev or prod > `npx webpack --entry ./index.js --output ./bundle.js --mode development`. I will output the file faster and in a more readable format
- Now in index.html: `<script src="bundle.js"></script>`, instead of index.js

webpack is the core library, webpack-cli is the api that allows us to configure it.

### webpack config

Name: `webpack.config.js`. Possible to change the name, but needs additional config.

We will use node modules, hence we need CommonJs to import modules. For js/node/webpack to understand webpack.config.js we need to export that module as CommonJs module:

`const path = require("path")` vs react: `import xyz from "abc"`
`module.exports = {` vs react: `export default {...}`

Running `webpack` in terminal will look for a webpack.config.js file `npx webpack --mode <development/production>`. Mode can also be set in webpack config

Now, lets configure package.json build script: `"build": "webpack"` and run it: `npm run build`.

## Multiple entry points

Use case: different pages in my site and I dont want a big js file, but I want to handle it per page.

webpackconfig (multi-entry-point folder):

- entry: json with different keys
- output - filename: programmatically create filename ([name])

## package.json:

### info

// Leonidas webpack 4.32.2
// npm i webpack --save-dev --save-exact

How to look a relative path: `'./<file>'`

## Loaders (css-style-loader folder)

Loaders are a webpack functionality to interpret certain file types that are not natively supported in JS.

To configure, add modules > rules in webpack config

css-loader: allows js to understand css, interprets css code (but does not include it in the build)
style-loader: injects css imports to html code

Order matters? First css-loader (last entry in `use`, see webpack.config)

Loaders: interpret types of files

## Plugins (plugins folder)

Extend webpack capabilities and give loaders more power

For example, what if I want a plugin to export css file on it own?: 'mini-css-extract-plugin' and 'html-webpack-plugin'

This is happening:

1. Interpret css import with 'css-loader'
2. Plugin (MiniCSSExtractPlugin) will extract the css. How will it extract it? We define that in the plugin section in webpack config
3. Include css link in html
   3a. Manually include css into html:
   `<link rel="stylesheet" href="dist/css/home.css" />`
   3b. OR use a plugin to inject it (HtmlWebpackPlugin will generate an html and put it in the dist folder)

## Dev server (webpack-dev-server folder)

Command that webpack autocompiles if there is a change in a file: `--watch` to either the package.json script or on command line > wont require a new build
`npm run build:dev -- -w` (build:devNoLocalhost)

What if I want the browser to autoreload? Use `webpack-dev-server` library. See webpack: `"build:devserver": "webpack-dev-server ...`. It is now running on localhost

## Hot module replacement (webpack-dev-server folder)

We can improve our dev server solution. Now, we want the code/UI to change without the browser reloading

1. Add plugin `new webpack.HotModuleReplacementPlugin()` in webpack.config file
2. Add `devServer` entry in webpack.config file. `open` opens browser tab automatically.
3. Include `module.hot.accept` in index.js

## Modern JS support (babel folder)

Babel interprets modern JS and transpiles it into a js the browser understands.

1. Add a rule in webpack config to use `babel-loader`
2. Install babel `npm install -D @babel/core babel-loader @babel/preset-env`
   `babel-loader` interprets JS files and passess them to @babel/core
   `@babel/core` traspiles from modern js to a browser-compatible js
3. Add a file `.babelrc` to configure babel
   presets: preconfiguration
4. `npm run build:babel`

What is happening under the hood?

- Let's use `build:babelNoWebServer` to check out the dist folder
- We are adding modern js in index, render and search files

However, we need an additional plugin for features like `async`:

1. Install deps `npm install -D @babel/plugin-transform-runtime`
2. `npm install --save @babel/runtime` > recommended to be install as core dep, not as dev dependcy
3. In `.babelrc`add a plugin `@babel/plugin-transform-runtime`: this plugin will support new js features (for example, generators)

## React(JSX) support (react folder)

JSX is not modern JS sort of speak, but something React came up with. Babel won't understand a react component out of the box, hence we need to transpile it.

1. `npm install -D @babel/preset-react` and react deps (`npm install --save react react-dom`)
2. Add preset to `.babelrc`: `@babel/preset-react`
3. Add template to webpack config plugins in `HtmlWebpackPlugin`: `template: path.resolve(__dirname, "index.html")`. So it takes index.html as template

## Working with React (react-v2 folder)

- Starting webpack v4, json files don't need a loader

## Supporting images, fonts and videos (url-loader folder)

Steps:

1. `npm install -D url-loader file-loader`
2. Add script: `build:url-loader` in package.json
3. In webpack.config include `"url-loader"` under rules
4. Load files, for example `<img src={logo} />`. This is where the loader works, the logo is in base4 at this point, if we inspect the html: `<img src="data:image/png;base64.....">`. If this is not what we see, it could be because the limit (under loader options) in webpack.config should be increased
5. Add fonts in index.css. Change font-family: `font-family: "open_sansregular";`

## Styles with preprocessors (prepro folder)

1. `npm install -D sass-loader stylus-loader less-loader postcss-loader`
2. `npm install -D stylus less node-sass`
3. webpack-config: add rules (less, scss, styl). postcss is different. We need to add it under css rule. And change it a bit because css-loader and postcss-loader may conflict. We need to make sure postcss-loader runs first (as last element in the config) and then css-loader
4. Add file `postcss.config.js`
5. Install `npm install -D postcss-nested`
6. Modify css folder
7. Update index.js css styles import
8. Modify App.js

Some loaders have peer dependencies. A peer dependency is a dependency that needs to be installed in the working project, because the loader itself doesn't install it.

## Advanced concepts

### Avoiding duplicated code (prevent-duplication folder)

1. webpack.config add `optimization` section
2. Add `contact` entry point in webpack.config to cause duplication
3. Add contact.html and include commons script in both index and contac html files
4. Run build script and check out `dist`folder

What is a chunk? A piece of my app (for example my imports)

### Adding a dynamic link library (dll folder)

Adding more dependencies will make build take longer. To improve dev experience and decrease the build time we will use dynamic link library.
Right now webpack will find duplicated code and will put it in commons.js. With dynamic link library we tell webpack that some dependencies (for example react and react-dom) are the same and webpack will create a separate file. This means that it will bundle dependencies and then link them so it is a usable module inside my app. At this point, when webpack compiles home and contact, it knows it doesnt need to manage react and react dom. This makes the bundle generation faster. Those libraries are not bundled every time a build is generated

1. webpack.dll.config:

- Add dependencies in entry -> modules
- Configure DllPlugin
- Add library in output

2. webpack.config:

- Plugin to consume DLL
- Add DllReferencePlugin plugin
- Replace style-loader with MiniCSSExtractPlugin

3. Add scripts to package.json
4. npm run build:dll and then npm run build:prevent-duplication-fast
5. Modify index and contact html files to use `modules` instead of `commons`, and add `stylesheet` link
6. Open index and contact html

dll config should be run first, so its output is the input for the regular config.

we dont need to do the dll bundle every time, just once normally. And then do the other bundle, the main one (webpack.config)

### Dynamic imports (dynamic-imports folder)

A module is loaded dynamically at runtime (when it is needed), and is it not included in my initial bundle. We decrease the initial load time.

Importing at the begining of the file implies that those will be included in the initial bundle

1. Create `alert.js`
2. In `App.js` add `import("./alert");` in handleClick function

- This import is loader async

3. To support dynamic imports, we need to add a babel plugin `npm install -D @babel/plugin-syntax-dynamic-import`
4. Add plugin to babelrc
5. npm run build:dynamic

## Practice

### Setup Platzi Badges + Configuration (platzi-badges folder, cd into folder)

https://github.com/LeonidasEsteban/webpack-4/blob/master/platzi-badges

Remove some package.json scripts, and leave `server` and `seed`

We will configure: dev and prod environments

#### Dev env

1. Add webpack configs: 3 files and .babelrc (taken from dynamic-imports folder)
2. Install dependencies, because:

webpack
webpack-cli
webpack-dev-server: start dev server
css-loader: project includes css
style-loader: we will include css dynamically into the html
file-loader: load files
babel-loader: to understand modern js
html-webpack-plugin
@babel/core
@babel/preset-env
@babel/preset-react
@babel/plugin-transform-runtime: to be able to use async functions
@babel/plugin-proposal-class-properties

@babel/runtime (not a dev dependency)

3. Configure webpack.dev.config

- We wont include mini-css-extract plugin because it takes time
- Remove DllReferencePlugin
- Change from url-loader to file-loader. Main difference is that url-loader loads files as base64 while file-loader only exports files and provides a link which can be faster.
- Configure devServer
- Configure HtmlWebpackPlugin
- Change output > publicPath

4. Include script "build:dev" in package.json

#### Prod env

We do this to optimize code. We will modify webpack.config and webpack.dll.config

In webpack.config:

1. Install `npm install -D mini-css-extract-plugin url-loader`
2. Add `css-loader` and remove `postcss-loader`
3. Remove less, stylus, sass config, HotModuleReplacementPlugin
4. Configure HtmlWebpackPlugin and entry
5. Remove mode, to be set on package script with --mode
6. Modify publicPath to use localhost from json server

In package.json

1. Add build and build:dll scripts
2. Modify `server` script

In webpack.dll.config:

1. Include "react-router-dom"
2. Remove mode, to be set on package script with --mode

Now:

1. Run `npm run build:dll` and then `npm run build`
2. Run `npm run server`

Now: error on localhost:3001, we need to configure dll properly

### Optimal Configuration (platzi-badges folder, cd into folder)

1. npm install -D add-asset-html-webpack-plugin
2. In webpack config configure AddAssetsHtmlPlugin. In webpack.dll configure output > filename
3. npm run build:dll; npm run build; npm run server

### Versioning, cleaning and compressing files (platzi-badges folder, cd into folder)

1. In webpack.config configure:

- output > filename with hash
- url-loader name and output
- MiniCSSExtractPlugin with hash

2. In order to clean dist folder: npm install -D clean-webpack-plugin

3. Configure CleanWebpackPlugin in webpack.config
4. npm install -D optimize-css-assets-webpack-plugin terser-webpack-plugin
5. Configure TersetJSPlugin and OptimizeCSSAssetsPlugin in webpack.config AND in webpack.dll.config under optimization

Then:

- Delete build folder
- npm run build:dll; npm run build; npm run server
