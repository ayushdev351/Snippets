// createElement is a legacy API. 
// Heading is an object.
// An element is a lightweight description of a piece of the user interface. 


const parent = React.createElement("div", {id : "parent"}, 
    React.createElement("div", {id : "child"},[
        React.createElement("h1", {key : 1}, "Helloo React h1"),
        React.createElement("h2", {key : 2}, "Helloo React h2")
    ]));

{/* 
<div id = "parent">
    <div id = "child">
        <h1>Hello React h1</h1>
        <h2>Hello React h2</h2>
    </div>
</div>
*/}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Here heading object is converted into actual DOM element
root.render(parent)