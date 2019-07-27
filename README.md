## Webpack
WP es un Module Bundler for Modern JS Applications, es decir un empaquetador de módulos para el desarrollo de aplicaciones modernas en JavaScript.

In a regular JS app we have tons of files in different formats. Webpack transforms these files into files the browser can understand.

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
- npm init (in terminal)
- Install webpack: npm install webpack --save-dev
- We can now use webpack. Check out the version: npm list webpack. `webpack -v` won't work cause we don't have it installed globally
- Our entry point: index.js
- Configure package.json build script: `"build": "webpack index.js bundle.js"`
  - `webpack <entry:index.js> <output:bundle.js>`
- run: `npm run build`