import React, { useState } from "react";
import Loader from "./loader";
import data from "./data.json";
console.log(data);
function App() {
    const [loadersList, setLoadersList] = useState([]);

    function handleClick() {
        setLoadersList(data.loaders);
    }
    return (
        <div>
            My React.js app
            <ul>
                {loadersList.map(element => (
                    <Loader {...element} key={element.id} />
                ))}
            </ul>
            <button onClick={handleClick}>Show what we have learned</button>
        </div>
    );
}

export default App;
