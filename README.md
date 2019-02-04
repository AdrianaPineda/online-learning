# Redux

Creator: Dan Abramov

Redux is a predictable state container for Javascript apps.

*Store*: contains the truth and has methods to update, get and listen to data.

*Actions*: information sent from the app to the store

*Reducers*: change the state of the application

UI > triggers > Actions > sent to > Reducer > updates > Store > contains > State > defines > UI

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

## Installation:

`npm install --save react-redux`

## Code:

Provider: high order component. Like a mixin.
- A provider extends functions, properties, etc to its children. In this case it will extend the store to its children
- The function `mapStateToProps` is also a high order component: will send new properties to the component

In the entries file:
```
import { createStore } from 'redux';
import { Provider } from 'react-redux'
...


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