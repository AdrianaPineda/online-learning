import React from 'react'; // build components
import { render } from 'react-dom'; // render components
import Home from '../pages/containers/home';
// import data from '../api.json'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import data from '../schemas/index.js';

import { Map as map } from 'immutable'

console.log(data)
// console.log(normalizedData)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// const initialState = {
//   data: {
//     // ...data
//     entities: data.entities,
//     categories: data.result.categories,
//     search: []
//   },
//   modal: {
//     visibility: false,
//     mediaId: null
//   }
// }

// Middleware:
function logger({ getState, dispatch }) {
  return (next) => {
    return (action) => {
      console.log('This is my old state', getState().toJS())
      console.log('We are going to execute this action', action)
      const value = next(action)
      console.log('This is my new state', getState().toJS())
      return value
    }
  }
}

// With ECMAScript 6
const loggerES6 = ({ getState, dispatch }) => next => action => {
  console.log('This is my old state', getState().toJS())
      console.log('We are going to execute this action', action)
      const value = next(action)
      console.log('This is my new state', getState().toJS())
      return value
}

// const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// const enhancer = applyMiddleware(logger)
const enhancer = applyMiddleware(loggerES6)

const store = createStore(
  reducer,
  map(),
  enhancer
)

// console.log(store.getState())

const homeContainer = document.getElementById('home-container')

// Provider: high order component
render(
  <Provider store={store}>
    <Home />
    {/* <p>Hello</p> */}
  </Provider>
  ,
  homeContainer
) // React knows this is a component (<Media /> HTML tag)