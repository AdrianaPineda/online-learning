import React from 'react'; // build components
import { render } from 'react-dom'; // render components
import Playlist from './src/playlist/components/3-playlist';
import data from './src/api.json';

const container = document.getElementById('app')
render(<Playlist data={data}/>,container) // React knows this is a component (<Media /> HTML tag)