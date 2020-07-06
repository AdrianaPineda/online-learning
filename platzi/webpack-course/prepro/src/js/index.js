// import "../css/index.css"; // Not natively supported, we need webpack for this
import "../css/styles.css";
// import text from "./text";
// import search from "./search";
// import render from "./render";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";

// text();
// document.body.innerHTML = "<p>Hello World from Webpack! home</p>";

// if (module.hot) {
//     module.hot.accept("./text.js", () => {
//         console.log("hot reload");
//         text();
//     });
// }

// const id = prompt("which pokemon do you want?");
// search(id)
//     .then(data => {
//         render(data);
//     })
//     .catch(() => {
//         console.log("No pokemon found");
//     });

render(<App />, document.getElementById("container"));
