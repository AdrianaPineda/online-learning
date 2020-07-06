import React, { useState } from "react";
import Loader from "./loader";
import data from "./data.json";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

function App() {
    const [loadersList, setLoadersList] = useState([]);

    function handleClick() {
        setLoadersList(data.loaders);
    }
    return (
        <div>
            My React.js app
            <video src={video} width={360} controls poster={logo}></video>
            <p>
                <img src={logo} width={40} />
            </p>
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
