# React
Javascript library for building user interfaces

Characteristics:
- Declarative: easy to write
- Based on components

Installing:
- Install node.js
- sudo npm install -g create-react-app > 

https://github.com/facebook/create-react-app 

By convention create components with capital case

Proptypes: npm install prop-types --save

https://reactjs.org/docs/typechecking-with-proptypes.html

## Webpack
Config: webpack.config.js

- Create a JS project: npm init
- Install dependencies declared in package.json: npm install
- Run npm script: npm run `build:prod`
- npm install xyz --save > will add to package.json
- npm install xyz --save-dev > will add to package.json as dev dependencies

## JSX
Javascript as XML

## DOM events
To link methods with our class > bind

https://reactjs.org/docs/handling-events.html

## Components state
- Properties are immutable, we cannot change this.props.x value
- State *is* mutable.

How do we change state?:
- this.setState({ ... })

## Component lifecycle
- Mount: when the component is going to be render.
- Update
- Unmount

### Mount
#### 1. constructor
- Method called *before the component is mounted* (component is not visible yet)
- We can init the state, bind events
- First method called when initializing component

#### 2. componentWillMount
- Method called just before the component is mounted (component is not visible yet)
- We can do a `setState`
- *Don't* do API calls or subscription events
- It will be called if we want to render components inside the server; and in the server we don't have the DOM to bind events

#### 3. render
- Contains all elements that will render (component's structure)
- Has the jsx in the return
- We can calculate properties

#### 4. componentDidMount
- Method called *after the component is mounted* (component is visible in the screen)
- It's launched just once
- We can bind events
- We can make API calls

### Update
#### 1. componentWillReceiveProps
- Method called when receiving new props
- It is useful to update the state with new properties

#### 2. shouldComponentUpdate
- Method that determines if the component should re-render again
- Used to optimize performance
- If the properties don't change, then I shouldn't re-render

#### 3. componentWillUpdate
- If `shouldComponentUpdate` returned true, or it `shouldComponentUpdate` wasn't handled
- Method called just before re-rendering a component
- Used to optimize performance

#### 4. render
- re-render

#### 5. componentDidUpdate
- Method called after the re-render

### Unmount
#### 1. componentWillUnmount
- Method called just before the component is removed from the app

### Error handling
#### componentDidCatch
- Method called if there is an error when rendering the component
- Error handling only happens in child components