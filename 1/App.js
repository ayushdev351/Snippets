// createElement is a legacy API. 
// Heading is an object.
// An element is a lightweight description of a piece of the user interface. 
const heading = React.createElement("h1", {className : "heading"}, "Hello React");

// Corresponding JSX
// <h1 className = "heading">Hello React</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

// Here heading object is converted into actual DOM element
root.render(heading)