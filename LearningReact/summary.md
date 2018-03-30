React is a javascript library used for building user interfaces.
Built at facebook. Open-sourced in 2013.
React aims to make the development of large scale single page applications much
easier.
Part of functional paradigm: emphasizes function-composition over object-oriented
implementation.
React 16: fiber
- improved asynchronous rendering
- return arrays of elements
- better error handling
- smaller file size

# Chapter 2
We use `ReactDOM` to render elements to the DOM

## JSX
JSX (javascript as XML): is a language extension that allows you to write tags
directly in your javascript

JSX is not natively supported by the browser, in order to use it we have to
transpile it. The leading tool for transpiling JavaScript so that is ready for
the browser is Babel.
Babel takes code that isn't supported by the browser and spits it out as code
that the browser supports.
The fastest to get started with Babel is to use the in browser transpiler.

To include it (Babel's inline browser transpiler):
<!--
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
AND
<script type="text/babel">
-->
OR
<!--
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.38/browser.js"></script>
AND
<script type="text/babel">
-->

Check out: https://cdnjs.com

Instead of:

<!-- ReactDOM.render(
    React.createElement('h1', null, 'Hello World'),
    document.getElementById('react-container')
) -->

We use:
<!-- ReactDOM.render(
    <h1>Hello World</h1>,
    document.getElementById('react-container')
) -->

However, when working in production we want to handle transpiling before the
scripts get to the browser. See more on `Babel Static Transpiling with babel-cli`

## Class component
React projects are a collection of composed components.
User interfaces are created by composing components (make a UI out of several nested components)
Every React component requires the `render` method, which return some JSX text

## Stateless component
A stateless component is a function that returns a UI (JSX elements)

## Using properties
When we want to display dynamic data with React we can use props
Example: `<h1>Hello {this.props.firstName}</h1>`
And pass it from the ReactDOM.render>
`<Hello firstName="Adriana"/>`
Props can also be used with stateless components, the only difference is that
since there is no `this`, we need to pass it to the function. We can also pass
the name of the property  `const HelloStateless = ({firstName}) => ...`

## Using state
When a component state data changes, the render function will be called again
to re-render the changed state.

The constructor initializes the state:
`constructor(props) {...`, `this.state = {`

We can and add a `handleCheck` function

On the input => `onChange={this.handleCheck}`

To bind the `handleCheck`, i.e to use `this.handleCheck`, on the constructor =>
`this.handleCheck = this.handleCheck.bind(this)` => this will keep `this` in scope

# Chapter 3
## Create React App
https://github.com/facebook/create-react-app
Allows you to generate a React project from scratch without having to spend time
configuring tools like webpack and babel

`npm install -g create-react-app`
`create-react-app <project name>`

It installs `react`, `react-dom` and `react-scripts`
`react-scripts` > package that is going to take care of tasks common in react applications:
compilation of JSX to regular javascript, setup a webpack build behind the scenes and will
give us several npm scripts that we can use to build the project

`npm start` will run the project on port localhost:3000

# Chapter 4
`npm install --save react-icons` to install icons

## Using refs
When creating stateful components in React there are times when we might want to check in
with UI elements to access their values. For example getting the text a user entered
in a textarea.
`<textarea ref={input => this._newText = input}/>`

## Adding child elements
`return (
    <Note key={i}
          index={i}>
          {note.note}
    </Note>
)`

`<p>{this.props.children}</p>`

# Chapter 5
In React, we store state in the parent component, we pass down state via props,
and then we pass up new information with events
Board: `<Note key={i} index={i} onChange={this.update} ...` > props
Note: `this.props.onChange(this._newText.value, this.props.index)` > event

setState can take in an object or a function.
To set the state with the previous state:
`this.setState(prevState => ({
    notes: prevState.notes.map(
        note => (note.id !== i) ? note : {...note, note: newText}
    )
}))`


`{} object syntax`

Used to send content:
`<button onClick={this.add.bind(null, "New Note")}></button>`

# Chapter 6
## Component lifecycle
Rendering to the DOM:
`ReactDOM.render(<Box />, document.getElementById('react-container'))`
>> this mounts the element to the React container

`componentWillMount` is always invoked immediately before the initial rendering
occurs
>> this is a great place to load data or do things before the DOM renders for the
first time

`componentDidMount` happens right after the initial mounting

`shouldComponentUpdate`

 Component lifecycle methods can only be used in ES6 class components

## Updating components
`componentDidUpdate` useful if we want to do something after the component updates

## Loading data
`fetch` to make an api call, supported by the browser

## Launching the app
`npm run build` will create a minified, optimized production build so that we
can launch it on a server
It creates a new `build` folder
Under `static` there will be file that has the code minified > will make the bundle
size smaller

To serve it with a static server, using a tool like serve:
`npm install -g serve; serve -s build`

State management solutions like:
https://redux.js.org/
https://mobx.js.org/getting-started.html

https://graphql.org/
