import React from "react";

import Child from "./ClassChildComp"

class Parent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name : "John",
        }

        console.log("Parent Constructor called");
    }

    async componentDidMount(){
        
        console.log("Parent Component Mounted")

        const data = await fetch("https://api.github.com/users/ayushdev351");
        const json = await data.json();

        this.setState({
            name : json.name,
        })
    }

    // This is only called when state gets updated -> It is not called on the initial render but only after 
    // setState is called...... i.e when states are updated
    // otherwise it wont be called.
    componentDidUpdate(){
        console.log("Parent Component Updated");
    }

    render(){

        console.log("Parent Rendered")

        return(
            <div>
                <h1>Class Component State : {this.state.name}</h1>
                <button onClick={this.handleClick}>Make API Call</button>
                {/* <Child name = "1"/>
                <Child name = "2"/> */}
            </div>
        )
    }
}

export default Parent
