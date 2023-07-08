import React from "react";
import ReactDOM from "react-dom";

// Multiple Line React Element -> Using JSX

const element = (
    <div>
        <h1>Hello</h1>
        <h2>Multiple Lines</h2>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

// Here object is converted into actual DOM element
root.render(element)