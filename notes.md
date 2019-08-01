# React
Javascript library for building user interfaces

Its a library not a framework. We import the library. A framework is more driven by practices and a specific way of organizing code, which React doesn't enforce. But the community has done a list of good practices.

Characteristics:
- Declarative: easy to write and read
- We tell React what we want to do, not how to do it. React will know what to do when it gets the code
- Based on components
-- Element: object > <ComponentName />
-- Component: class > ComponentName

Component is a blueprint (class or function): https://medium.freecodecamp.org/react-interview-question-what-gets-rendered-in-the-browser-a-component-or-an-element-1b3eac777c85

When to create a component? Identifying a component
- When elements repeat: are in a list, or share visual aspect or functionality
- When elements have a specific function: help encapsulate logic; help gather behavior and visual aspects in a single place

Installing:
- Install node.js
- sudo npm install -g create-react-app > 

https://github.com/facebook/create-react-app 

By convention create components with capital case

Proptypes: npm install prop-types --save

https://reactjs.org/docs/typechecking-with-proptypes.html

Project sample: https://github.com/LeonidasEsteban/platzi-video/

## Webpack
Config: webpack.config.js

- Create a JS project: npm init
- Install dependencies declared in package.json: npm install
- Run npm script: npm run `build:prod`
- npm install xyz --save > will add to package.json
- npm install xyz --save-dev > will add to package.json as dev dependencies

## JSX
Javascript as XML
Sugar syntax

```
const element = <h1> Hello </h1>;
const element = React.createElement('h1', {}, 'Hello') // type of element, attributes (props), children (inner text, inner html)

const element2 =  React.createElement('a', { href: 'xyz.com' }, 'Go to xyz')
```

## Others
- We use className instead of class, because class is a reserved word
- We we have more than one property of a component, indent enhances visibility
- The volume inside media elements in HTML5 works with values between 0 and 1

## DOM events
To link methods with our class > bind

https://reactjs.org/docs/handling-events.html

```
import React from 'react'; > createElement, we use JSX through the impor React from 'react'
import ReactDOM from 'react-dom'; > appendChild
```

## Components state
- Properties are immutable, we cannot change this.props.x value
- State *is* mutable.

How do we change state?:
- this.setState({ ... })

## Component lifecycle
- Mount: when the component is going to be rendered. When the component code is inserted in the DOM
- Update: info changes
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
- Perfect place to init values/states

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

## React Pure and Functional Components
- PureComponent: handles `shouldComponentUpdate` automatically, and it won't re-render if its properties don't change
- Functional Component: does not have a lifecycle; is a function:
~~~
function Playlist(props) {
  return(
    <div>
      {props}
    </div>
  )
}
~~~

## Smart and Dumb components
- Smart component: what does my component do?
- Dumb component: how does my component look like?

They are called:
- Smart, statefull, fat, container
- Dumb, pure, skinny, presentational components

We divide the component into presentational and containers when it starts doing a lot. Useful when many people work on the same code.

UI components > present info, UI, responsible of the interface: function, called `Component`
Container components > Logic (responsible of the logic): class, called `ComponentCotainer`

### Presentational component
- May contain any type of component (smart or UI components)
- Allow composition with {props.children}
- Don't depend on the rest of the app
- Doesn't specify how the data is loaded or is mutated: it only receives data and presents it
- Receive data and callbacks through properties
- Rarely they have their own state
- Are written as functional components unless they need performance improvements

### Containers
- Have lifecycle
- Are concerned about the app functionality
- May contain UI components and other containers
- Don't have styles!
- Provide data to the UI components and other containers
- Provide callbacks to the UI
- They normally have state
- They call actions
- Generated by higher order components

Why do we have those two types of components:
- To separate responsibilities
- Allows for component reuse

## Portals
- Allows another component to be added to index.html different than `app`
- Using portals allows us to avoid styles issues (for example z-index)

~~~
import { createPortal } from 'react-dom';
// import ReactDOM from 'react-dom';
...
createPortal(
      this.props.children, 
      document.getElementById('modal-container')
)
// ReactDOM.createPortal
~~~

Remember this is the same strategy for the home.js

Checkout modal.js inside src/widgets/containers

## Error handling
componentDidCatch(error, info) { ... }

## Debugging errors
Inside webpack config:
~~~
devtool: 'eval-source-map',
~~~

## Media events
https://reactjs.org/docs/events.html#media-events

## Project structure
See structure.png

home - entry point para webpack

  Home - página / (container|smart)
    -> <!-- Layout - UI -->
      -> Related - UI
      -> Categories - UI
         -> Category - UI
            -> Playlist - UI
               -> Media - UI / Pure
      -> Search / (container|smart)
         -> <!-- Search Layout UI -->
            -> Input - UI
      -> Modal - (container|smart)
        -> <!-- Layout - UI -->
          -> VideoPlayer - (container|smart)
            <!-- Layout -->
             -> Video - UI state
             -> Spinner - UI
             -> Controls - UI
                -> PlayPause - UI
                  -> PlayIcon - UI
                  -> PauseIcon - UI
                -> Timer - UI
                -> ProgressBar - UI
                -> Volume - UI
                  -> VolumeIcon - UI
                -> FullScreen - UI
                  -> FullScreenIcon - UI

## Other
- Button reloads page, solutions:
  - form > handleSubmit > e.preventDefault
  - button > change type from submit to button
- In a form, I can have a state but the elements(inputs) inside the form will have a state too
  - add `value={this.state.xyz}`to the input to make it a controlled one
- Lifting the state: move state to another component (higher in the DOM)
- Composition example: DeleteBadgeModal > uses Modal, a more generic component inside a specific one. Modal has {props.children} to allow this

## Multi-page & Single page apps
- Multi-page: for each page the site needs to contact the server and re-paint the site with the api response. We ask for the entire html.
- Single page: apps load a single html page and any update is done by re-writing the existing html. The server is contacted but the site only asks the info needed without reloading the entire page. We only ask for the index.html once.

React Router gives us tools to create single page apps (SPA) easily. Some components: BrowserRouter, Router, Switch and Link
- BrowseRouter: encapsulates all components. We need to put everything inside this to support routing
- Route: represents a url address. Has the path and the component to render. The component receives match, history and location
- Switch: matches the component to render based on a route. The first one that matches
- Link: replaces <a> but does not reload the entire page, and changes the url

```
install `react-router-dom`

import { BrowserRouter, Switch, Route } from 'react-router-dom';

<BrowserRouter> // can only have one child
  <Switch> // presents one route based on the browser path. Otherwise, multiple page components will be shown
    <Route exact path="/" component={Home} />
    <Route exact path="/badges" component={Badges} />
    <Route exact path="/badges/new" component={BadgeNew} />
    <Route exact path="/badges/:badgeId" component={BadgeDetails} />
    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
    <Route component={NotFound} />
  </Switch>
</BrowserRouter>

...

<Link to="/badges/new" className="btn btn-primary">
  New Badge
</Link>
```

`React.Fragment` > replaces unnecessary divs

## API calls
- States: loading, error and data (empty, with info)
- componentDidMount()

```
state = {
  loading: true,
  error: null,
  data: [],
};

componentDidMount() {
  this.fetchData();
}

fetchData = async () => {
  this.setState({ loading: true, error: null });

  try {
    const data = await api.badges.list();
    this.setState({ loading: false, data: data });
  } catch (error) {
    this.setState({ loading: false, error: error });
  }
};
```

Api class: https://github.com/Sparragus/platzi-badges/blob/14.APIRequestGET/src/api.js`

## Hooks
Allow functional components to have characteristics that only classes have:
- useState: to handle state
- useEffect: to subscribe the component a its lifecycle
- useReducer: execute effects/actions based on an action

Custom hooks: function name must start with `use` and cannot be executed conditionally (if x then hook > NO) 

Check `useIncreaseCount` in BadgeDetails
`BadgesList` was a React component, and changed into a function to use hooks

- `React.useMemo`: sort of a cache, if it has a value for the query it returns the memorized one otherwise it will calculate the query. Example: `React.useMemo(() => {...} ), [a, b]: list.)` If the elements of the list are the same, the result will be the memorized one (if there is a memorized result already)

- Hooks help decrease code repetitions, decrease responsibilities of each function, organize code and make code cleaner. The logic of searching badges, which does not relate on how the UI is shown, in a single place. Useful for views with lists of items.