# Chapter 1: What is React?

## Developer Tools
- React Developer Tools
- react-detector

## Efficient rendering with React
DOM (Document Object Model): is the structure of HTML elements that make up a
webpage. The DOM api refers to how these page elements are accessed and changed.

React made updating the DOM faster by using DOM Diffing.
DOM Diffing:
- Happens when you compare the currently rendered content with the new UI
changes that are about to be made
- React optimizes this by making only the minimal changes necessary
- With DOM Diffing javascript objects are compared
- Is faster than writing or reading from the DOM


DOM <-> Javascript logic
The Javascript logic is interacting with the DOM to make updates.
Whenever we use functions like `getElementById` we are reading from the DOM.
When we change any of those elements, change classes, content, you are writing
to the DOM.
Writing to and reading to the DOM is slow, working with javascript objects is
faster.

DOM <-> Backbone views
We also deal with a slower DOM with other frameworks and libraries like Backbone.
The way that we typically program with Backbone is that we re-render the same
data over and over again, even when the changes haven't happen everywhere. This
re-rendering slows down our apps a lot.

DOM <-- React DOM <-> Javascript logic
With React, only the minimal changes will be rendered, so this is really efficient.
If we want to change an item from a bullet list, we don't get rid from the
existing list, we will just make the *one* required change.
We *never read* from the DOM and we only write to it when a change is required.

# Chapter 2
## Pure React
httpster -> to start a server to load the files easily
`npm install -g httpster`
`httpster -d ./dist -p 3000` // -d for directory; -p for port

## Using JSX + Babel
`style={style}`, the {} denote a JSX expression

##  Babel Static Transpiling with babel-cli
`npm init` > generates package.json
`npm install babel-cli@6.18.0 --save-dev` > installs babel-cli
`npm install -g babel-cli` > will allow me to run the babel-cli command from anywhere on my computer
Good practice: create `src` folder to include js files
Create file `.babelrc`: we set the presets or everything we want to transpile using Babel
`npm install babel-preset-react@6.16.0 --save-dev`
`npm install babel-preset-latest@6.16.0 --save-dev`
`npm install babel-preset-stage-0@6.16.0 --save-dev`
`babel ./src/index.js --out-file ./dist/bundle.js` > transpiles everything into bundle.js

In `package.json`, the `start` command includes the server install, so we can do
`npm start`

## Building with webpack
Webpack is a module bundler that helps us create static files and helps us
automate processes that need to happen before our files can go into production.

A typical html might load several different scripts, making several http requests.
Webpack will run several commands at a time to create a bundle file. This bundle
packages scripts, dependencies and even CSS into one file. One file means one request.

1. Create a Webpack config file: `webpack.config.js`. It will describe everything
we want webpack to do to our files, to get them ready for production.
2. Install webpack `npm install webpack@1.13.3 --save-dev`
3. Install Babel loader `npm install babel-loader@6.2.5 --save-dev`
4. Install Webpack dev server `npm install webpack-dev-server@1.16.2 --save-dev`
Any change to the files, will automatically be rebuilt. Reloads automatically
5. Install webpack globally: `npm install -g webpack@1.13.3`
6. Run webpack `webpack`. If you want to use webpack locally `./node_modules/.bin/webpack`
This creates the bundle.js file :)
7. Update the index.html to use the bundle.js `src="assets/bundle.js"`
8. In package.json we can use the webpack dev server: `"start": "./node_modules/.bin/webpack-dev-server"`
when running `npm start`

## Loading JSON with webpack - Section 2 Video 6
1. Install react and react dom:
`npm install react@15.3.2 --save-dev`
`npm install react-dom@15.3.2 --save-dev`
We can now remove them from the index file
2. Create lib.js file under src folder
3. Create titles.json file under src folder
4. See lib.js to understand how to get values from the json file
5. An additional loader is needed to process the json data, in webpack.config.js
6. Install json loader `npm install json-loader@0.5.4 --save-dev`
7. `npm start`

## Adding CSS to webpack build - Section 2 Video 7
1. Inside `src` folder, create another folder `stylesheets`
2. Create `xxx.css` and `yyy.scss` inside `stylesheets` folder. We will use
webpack to transpile scss to css
3. An additional loader is needed to process the css, in webpack.config.js
4. An additional loader is needed to process the scss, in webpack.config.js
5. Install dependencies:
`npm install autoprefixer-loader@3.2.0 --save-dev`
`npm install css-loader@0.25.0 --save-dev`
`npm install node-sass@3.10.1 --save-dev`
`npm install sass-loader@4.0.2 --save-dev`
`npm install style-loader@0.13.1 --save-dev`
6. In lib.js add `import './stylesheets/goodbye.scss'` and `import './stylesheets/hello.css'`
7. `npm start`

# Chapter 3
When we look at a user interface designed with React, we can think of it as just
being an organized collection of components. The purpose of each component is to
display data

## Component properties
Think of properties in React as being an object and every property is a key.

## ES6 - Video 5
Specification released in 2015 that describes how JavaScript should be implemented
by browsers.
One feature of ES6, used with React, is class syntax
`export class SkiDayCount extends Component {`

## Creating stateless functional components
So far, we have use 2 different components to create component:
- `createClass`
- ES6 class (`export class SkiDayCount extends Component `)

Another option is to create a component using a function (stateless functional
components). Stateless functional components are functions that take in property
information, and return JSX elements. Stateless components can't access `this`,
so properties are passed directly into the function. Also local methods need to
be removed and put into their own functions.

`const MyComponent = (props) => (
    <div>{props.title}</div>
)`

It's typically a good idea to use stateless component whenever possible.
Stateless components offer a functional way to work with components and, also,
the React team has hinted that there may be some performance benefits of using
these functions, rather than using `createClass`, or ES6 classes.

## Adding React icons
React is a library not a framework; libraries are pretty small

https://gorangajic.github.io/react-icons/fa.html

The destructuring assignment syntax was introduced to JavaScript in ES6, it is
a simple way of extracting data stored in objects and arrays into variables

# Chapter 4

## Displaying child components
In React if we're rendering children from an array, we need to supply a key value,
because that's going to help with smart rendering, then React will know what to
update.
We can send each of the props, or use the JSX spread operator `{...day}`. The spread
operator is going to take any keys that are part of that object and make them
accessible by the class they are being sent to.

## Default properties
Allows us to provide values when they are not supplied
`SkiDayCount.defaultProps = {
  total: 50,
  powder: 10,
  backcountry: 15,
  goal: 75
}`

## Validating with React.PropTypes
PropTypes allow us to supply a property type for all of our different properties,
so that it will validate we're supplying the right type.
It is a good way to document what should be supplied as values.
- createClass way
`propTypes: {
  total: PropTypes.number.isRequired,
  powder: PropTypes.number,
  backcountry: PropTypes.number
},
`
- ES6 way and stateless
`SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number
}
`

## Custom validation
`SkiDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"SkiDayList should be an array"
				)
		} else if(!props.days.length) {
			return new Error(
				"SkiDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}
`

## Working with state
State represents the possible conditions of your application.
In React apps we want to:
- Identify the minimal representation of app state
- Reduce state to as few components as possible
- Avoid overwriting state variables, which can cause chaos in our applications

`getInitialState()` is how we initialize state as the default. When the app renders
for the first time, we will use this initial state.

In a stateless functional component you cannot set up initial state.

## Passing state as props
`render() {
    return (
        <div className="app">
            <SkiDayList days={this.state.allSkiDays}/>
            <SkiDayCount total={this.countDays()}
                         powder={this.countDays(
                                "powder"
                            )}
                         backcountry={this.countDays(
                                "backcountry"
                            )}/>
        </div>
    )
}`

## State with ES6 classes
With constructor

# Chapter 5 - React Router
Routing solution for React applications.
The react-router is a tool that helps you dynamically display the page we want to see .

## Incorporating the Router
`npm install react-router --save`
For example: `<Route path="/" component={App}/>`

`<Router history={hashHistory}>`
- history is going to listen to the browser's address bar for any changes
and it will keep track of those changes.

## Setting up routes
`<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="list-days" component={App} />
    <Route path="add-day" component={App} />
    <Route path="*" component={Whoops404}/>
</Router>,`

## Navigating with the link component
`import { Link } from 'react-router'`

`<Link to="/" activeClassName="selected">
    <HomeIcon />
</Link>
<Link to="/add-day" activeClassName="selected">
    <AddDayIcon />
</Link>
...`

The `Link` component is converted to a `a` tag HTML element

## Using route parameters
index.js
`<Route path="list-days" component={App}>
    <Route path=":filter" component={App} />
</Route>`
SkiDayList.js
` const filteredDays = (!filter ||
       !filter.match(/powder|backcountry/))?
       days:
       days.filter(day => day[filter])`


`<td colSpan={4}>
    <Link to="/list-days">
        All Days
    </Link>
    <Link to="/list-days/powder">
        Powder Days
    </Link>
    <Link to="/list-days/backcountry">
        Backcountry Days
    </Link>
</td>`

The Router makes it fairly easy to pass these router parameters so that we can
create unique routes for filtered data.
With router parameters we can easily go to a different route based on a filter.

## Nesting routes
index.js
`export const Left = ({ children }) =>`
// We are passing children is because the left component, when rendered,
// will render any children dynamically

routes.js
`<Route path="/" component={Left}>
    <Route path="about" component={About} />
    <Route path="members" component={MemberList} />
</Route>`

# Chapter 6 - Forms and Refs

## Refs in class components
Props are typically the only way that parents' components can interact with their
children. When we modify a child, you re-render it with new props.
`ref="resort"`
`console.log('resort', this.refs.resort.value)`
OR `console.log('powder', this.refs.powder.checked)` > for boolean
We can use refs the same way we use props

Note: to set the default of a checkbox to be the value of a property:
`defaultChecked=`

## Use refs in stateless components
In stateless components we don't have access to the `this` keyword. If we use refs,
we won't be able to access them with `this`.
We can use callback functions as refs to capture the values.

From `ref="resort"` to:
`ref={input => _resort = input}` (see the `_`?)

Now, to capture those values:
1. Create variables, to keep them in scope so we can use them inside of our nested
functions:
`let _resort, _date, _powder, _backcountry`
2. Log values:
`console.log('date', _date.value)
console.log('powder', _powder.checked)`

Callback refs can be use with ES6 classes, but they must be used with stateless
functional components.

## Two-way function binding
We need to pass the values up the component tree to the parent

1. On the `onSubmit` method, we will add this:
`onNewDay({
    resort: _resort.value,
    date: _date.value,
    powder: _powder.checked,
    backcountry: _backcountry.checked
})`
2. Reset values:
`_resort.value = ''
_date.value = ''
_powder.checked = false
_backcountry.checked = false`
3. Add `onNewDay` as a property of the `AddDayForm`
`export const AddDayForm = ({ resort,
							 date,
							 powder,
							 backcountry,
							 onNewDay }) => {`
4. Pass `onNewDay` down as a property to the `AddDayForm`
`<AddDayForm onNewDay={this.addDay}/>`
5. Add method in `App.js`
`addDay(newDay) {
    this.setState({
        allSkiDays: [
            ...this.state.allSkiDays,
            newDay
        ]
    })
}`

## Autocomplete component
See `class Autocomplete extends Component`
In the form `<Autocomplete options={tahoeResorts} ref={input => _resort = input}/>`

# Chapter 7
## Building the Member Component
