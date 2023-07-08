import React from "react";
import ReactDOM from "react-dom";

// React element -> Using react.createElement
const parent = React.createElement("div", {id : "parent"}, 
    React.createElement("div", {id : "child"},[
        React.createElement("h1", {key : 1}, "Helloo React h1"),
        React.createElement("h2", {key : 2}, "Helloo React h2")
    ]));

// React Element -> Using JSX
const jsxElement = <h1>Hi from JSX Element</h1>;


const root = ReactDOM.createRoot(document.getElementById("root"));

// Here heading object is converted into actual DOM element
root.render(jsxElement)