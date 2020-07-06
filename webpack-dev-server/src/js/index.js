import "../css/index.css"; // Not natively supported, we need webpack for this
import text from "./text";

text();
// document.body.innerHTML = "<p>Hello World from Webpack! home</p>";

if (module.hot) {
    module.hot.accept("./text.js", () => {
        console.log("hot reload");
        text();
    });
}
