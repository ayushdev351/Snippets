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

// React Functional Component -> Returns react element created using JSX
const FunctionalComponent = () => {
    return(
        <div>
            <h1>Hi from functional Component</h1>
            {jsxElement}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Here object is converted into actual DOM element
root.render(<FunctionalComponent/>)