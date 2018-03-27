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
To include it:
<!--
<script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
AND
<script type="text/babel">
-->

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


## Class component
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

## Chapter 3
# Create React App
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

`npm install --save react-icons` to install icons
