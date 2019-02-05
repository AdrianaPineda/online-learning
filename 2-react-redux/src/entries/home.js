import React from 'react'; // build components
import { render } from 'react-dom'; // render components
import Home from '../pages/containers/home';
import data from '../api.json'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/data';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const initialState = {
  data: {
    ...data
  }
}

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  (state) => state,
  initialState,
  enhancer
)

console.log(store.getState())

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