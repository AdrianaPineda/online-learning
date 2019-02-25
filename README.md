# Redux

Creator: Dan Abramov

Redux is a predictable state container for Javascript apps.

*Store*: contains the truth and has methods to update, get and listen to data.

*Actions*: information sent from the app to the store

*Reducers*: change the state of the application

UI > triggers > Actions > sent to > Reducer > updates > Store > contains > State > defines > UI

- References: https://github.com/xgrommx/awesome-redux

## Principles
1) Single source of truth
- A single page application should have only 1 store
- We can have one store per page

2) State is read-only

3) Changes are made with pure functions

## Store
- Has the state of the application
- getState(): access the state
- dispatch(action): update state
- subscribe(listener): listens to changes 
- subscribe(listener): stops listening to changes when we return the function sent to the subscribe method

### Store
- import { createStore } from 'redux'
- The method `createStore` requires 3 params:
    - Reducer: pure function that returns the next state
    - PreloadState/InitialState: initial state of the app
    - Enhancer: function that extends redux capabilities (optional param)

```
const store = createStore(
    reducer,
    initialState,
    enhancer
)
```

### Action
- Sent using the `dispatch()` method of the store
- Unique source of information of the store
- Plain JS objects
    - `type` is mandatory

Action:
```
{
    type: 'ADD_SONG',
    payload: 'Despacito'
}
```

Dispatch:
```
store.dispatch({
    type: 'ADD_SONG',
    payload: 'Despacito'
})
```

### Reducer
- Pure function
- There could be more than one reducer in an app, but there must be just one store
- Returns the next state
- We should keep them as simple as possible

### A reducer must never:
- Modify its arguments
- Perform tasks with side effects (like API calls)
- Call non-pure functions like Date.now() or Math.random()

#### What is a pure function
- Given the same input, the function must return the same value
- Must not have side effects

```
const reducer = function(
    state,
    action
) {
    switch(action.type) {
        case 'ADD_SONG':
            return [...state, { title: action.payload }]
        default:
            return state
    }
}
```
Tip: make state immutable like: `return [...state, { title: action.payload }]`

We can set the initial state as follows:
```
// reducer_function_name.js
function reducer_function_name(state = {visibility: false, mediaId: null}, action) {
  ...
}

export default modal
```

- How do we merge/combine several reducers?

```
// index.js
import data from '../reducers/data';
import modal from '../reducers/modal';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  data,
  modal
})

export default rootReducer
```


## Installation:

`npm install --save react-redux`

`npm install --save redux`

## Code:

Provider: high order component. Like a mixin.
- A provider extends functions, properties, etc to its children. In this case it will extend the store to its children
- The function `mapStateToProps` is also a high order component: will send new properties to the component

In the entries file:
```
import { createStore } from 'redux';
import { Provider } from 'react-redux'
...

// This method can be added in another file (see reducers/data.js)
const reducer = (state, action) => {
    switch (action.type) {
        case ...
            return ...
        default:
            return state
  }
}

const initialState = {
  ....
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  reducer,
  initialState,
  enhancer
)

...
render(
  <Provider store={store}>
    <Home />
    {/* <p>Hello</p> */}
  </Provider>
  ,
  homeContainer
)

```

In the components
```
import { connect } from 'react-redux'
...

function mapStateToProps(state, props) {
  return {
    categories: state.data.categories
  }
}

export default connect(mapStateToProps)(Home);

```

Dispatch actions
- With the store:
```
store.dispatch({
    type: 'ADD_SONG',
    payload: {
      title
    }
})
```

OR

- With connect: the component will receive a `dispatch` method in his properties

```
import { connect } from 'react-redux'

...

 this.props.dispatch({
     type: 'SEARCH_VIDEO',
     payload: {
         query: this.input.value
     }
})

...
export default connect()(SearchContainer);
```

Components with state (inside containers) are the ones that connect to the store

## Normalizing data
Improves performance

- Source: https://github.com/paularmstrong/normalizr

## Multiple reducers
- We can have one reducer per key we have in our state

## Immutable Data
- https://github.com/gajus/redux-immutable
- https://facebook.github.io/immutable-js/

`npm install immutable redux-immutable --save`

What do we want to be immutable? A/ Our state. We need to make everything immutable (initial state from home, and in each reducer)

Most used immutable data structures: Lists (replace arrays) and maps (replace objects)
- Objects in immutable are maps
- Arrays in immutable are lists

Our rootReducer is not immutable yet, so we use `import { combineReducers } from 'redux-immutable';`

Access to the state is different now > `state.data` now is `state.get('data')`
- New objects are created when we do `get('xyz')` burt this is highly optimized
- toJS() generates a new object every time we render the component
- Our objects are now maps (due to the immutability support)

How to set several state values?

```
state.merge({
  key1: '',
  key2: ''
})

OR

state.set('key1', '').set('key2', '')
```

## Actions creators
- Functions that have actions and return the action object
- We can have a file with all actions, or a file per each reducer

## Binding action creators
- Redux has a function named 'bindActionCreators' that receives a group of actions and combines them with the dispatch

```
import { bindActionCreators } from 'redux'

// ...

this.props.actions.closeModal()

// ...

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

## Action types
- We want to avoid having duplicated code in the reducers and in the action creators
- See folder action-types

## Middlewares
- A way to intercept React/Readux to do something additional (as devtools) -> enhancer
- Middlewares are functions that receive dispatch and getState (as arguments) from the store and return a function. The function that it returns will receive a method to dispatch the next middleware and returns a function that receives an action and calls next(action)

```
import { applyMiddleware } from 'redux';

// ...

function middleware_function_name({ getState, dispatch}) {
  return (next) => {
    return (action) => {
      return next(action)
    }
  }
}

const enhancer = applyMiddleware(middleware_function_name)

const store = createStore(
  reducer,
  map(),
  enhancer
)
```

### Multiple middlewares

References: 
- https://github.com/xgrommx/awesome-redux

- We are going to use some community resources, for example: https://github.com/LogRocket/redux-logger

Now, using multiple middlewares

Source: https://github.com/zalmoxisus/redux-devtools-extension
1) npm install --save-dev redux-devtools-extension
2) Code:
```
import { composeWithDevTools } from 'redux-devtools-extension';

// ...

const enhancer = composeWithDevTools(
  applyMiddleware(
    logger, // executed second
    loggerES6 // executed first
  )
) // middlewares

```
## Async actions
There are 2 ways of handling asynchronous actions:
1) redux-thunk (middleware): manage async flows from inside the actions
2) Manage async flows from outside of the actions
Example of 2)
```
handleSubmit = event => {
  fetch(`https://....`).then((data) => {
    this.props.actions.searchEntities(...)
  })
}
```

- When we send an action, we can return a function. That function will have as parameter the dispatch

Steps:
1) npm install redux-thunk --save
2) See below:
```
import thunk from 'redux-thunk'

// ...

const enhancer = composeWithDevTools(
  applyMiddleware(
    logger,
    loggerES6,
    thunk
  )
)

const store = createStore(
  reducer,
  map(),
  enhancer
)

// ...
export function searchAsyncEntities(query) {
  return (dispatch) => {
    // Mimic an api request delay:
    setTimeout(() => {
      dispatch(searchEntities(query))
    },
    5000)
  }
}
```