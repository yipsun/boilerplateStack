import React from "react";
import ReactDOM from "react-dom";

window.onload = () => {
    const Index = () => {
        return <div>Hello React!</div>;
    };
    console.log(333);

    ReactDOM.render(<Index />, document.getElementById("index"));
}