import React from 'react'; // build components
import { render } from 'react-dom'; // render components
import Home from '../pages/containers/home';
import data from '../api.json'

const container = document.getElementById('app')
render(<Home data={data}/>,container) // React knows this is a component (<Media /> HTML tag)