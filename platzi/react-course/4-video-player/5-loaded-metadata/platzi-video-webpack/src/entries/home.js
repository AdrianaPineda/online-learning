import React from 'react'; // build components
import { render } from 'react-dom'; // render components
import Home from '../pages/containers/home';
import data from '../api.json'

const homeContainer = document.getElementById('home-container')
render(<Home data={data}/>,homeContainer) // React knows this is a component (<Media /> HTML tag)