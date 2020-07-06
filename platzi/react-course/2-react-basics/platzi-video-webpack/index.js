// console.log("Hello world");
import React from 'react'; // build components
// import ReactDOM from 'react-dom'; // render components
import { render } from 'react-dom'; // render components
import Media from './src/playlist/components/6-media'; // webpack by default knows this file is `.js`

const container = document.getElementById('app')
// const helloWorld =  <h1>Hello world!</h1>
//ReactDOM.render(what should I render > could be a component or a react element, where will I render it?)
// ReactDOM.render(helloWorld,container) // React knows this is a component (<Media /> HTML tag)
render(<Media type="video" title="What is responsive design?" author="Adriana Pineda" image="./images/covers/responsive.jpg" />,container) // React knows this is a component (<Media /> HTML tag)