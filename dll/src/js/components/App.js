import React, { useState } from "react";
import Loader from "./loader";
import data from "./data.json";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

import "../../sass/sass.scss";
import "../../less/less.less";
import "../../stylus/stylus.styl";

function App() {
    const [loadersList, setLoadersList] = useState([]);

    function handleClick() {
        setLoadersList(data.loaders);
    }
    return (
        <div>
            <p className="sass">Sass</p>
            <p className="less">Less</p>
            <p className="stylus">Stylus</p>
            <p className="post-css">Postcss</p>
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
