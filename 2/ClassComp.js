import React from "react";

import Child from "./ClassChildComp"

class Parent extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0,
        }

        console.log("Parent Constructor called");
    }

    componentDidMount(){
        console.log("Parent Component Mounted")
    }


    // This is only called when state gets updated......otherwise it wont be called.
    componentDidUpdate(){
        console.log("Parent Component Updated")
    }

    render(){

        const counter = () => {
            this.setState({
                count : this.state.count + 1,
            })
        }

        console.log("Parent Rendered")

        return(
            <div>
                <h1>Class Component State : {this.state.count}</h1>
                <button onClick={counter}>Change State Button</button>
                <Child name = "1"/>
                <Child name = "2"/>
            </div>
        )
    }
}

export default Parent

/*
Parent Constructor Called
Parent Render Called

*/ 