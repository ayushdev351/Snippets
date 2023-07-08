import React from "react";
import ReactDOM from "react-dom";

// Component Composition

const Header = () => {
    return(
        <div>
            <h1>Header</h1>
            <HeaderElement name = "One"/>
            <HeaderElement name = "two"/>
            <HeaderElement name = "three"/>
        </div>
    )
}

const HeaderElement = (props) => {
    return(
        <div>
            <h3>Header Element {props.name}</h3>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Here object is converted into actual DOM element
root.render(<Header/>)