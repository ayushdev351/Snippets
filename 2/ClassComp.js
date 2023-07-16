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
        
        // console.log("Parent Component Mounted")

        // const data = await fetch("https://api.github.com/users/ayushdev351");
        // const json = await data.json();

        // this.setState({
        //     name : json.name,
        // })
        this.timerId = setInterval(() => {
            console.log("tick");
        }, 1000)
    }

    // This is only called when state gets updated -> It is not called on the initial render but only after 
    // setState is called...... i.e when states are updated
    // otherwise it wont be called.
    componentDidUpdate(){
        console.log("Parent Component Updated");
    }

    componentWillUnmount(){
        console.log("All Cleanup Done")
        console.log("Parent Component Will Unmount");
        clearInterval(this.timerId)
    }

    render(){

        console.log("Parent Rendered")

        return(
            <div>
                <h1 style={{"backgroundColor" : "aqua", "padding" : "10px"}}>Made API Call to fetch Data</h1>
                <h1>Class Component State : {this.state.name}</h1>
            </div>
        )
    }
}

export default Parent