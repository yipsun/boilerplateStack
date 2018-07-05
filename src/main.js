import React from "react";
import ReactDOM from "react-dom";

window.onload = () => {
    const Index = () => {
        return <div>Hello React!</div>;
    };

    ReactDOM.render(<Index />, document.getElementById("index"));
}