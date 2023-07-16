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

    render(){

        console.log("Parent Rendered")

        return(
            <div>
                <h1>Class Component</h1>
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