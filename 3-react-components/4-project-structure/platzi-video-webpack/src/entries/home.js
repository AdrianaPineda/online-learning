import React from 'react'; // build components
import { render } from 'react-dom'; // render components
import Home from '../pages/containers/home';

const container = document.getElementById('app')
render(<Home />,container) // React knows this is a component (<Media /> HTML tag)