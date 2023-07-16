import React from "react";

class Child extends React.Component{

    constructor(props){
        super(props);

        console.log("Child " + this.props.name + " Constructor")
    }

    componentDidMount(){
        console.log("Child "+  this.props.name  + " Component Mounted")
    }

    render(){

        console.log("Child " + this.props.name + " Rendered")

        return(
            <div>
                <h1>Hello {this.props.name}</h1>
            </div>
        )
    }
}

export default Child