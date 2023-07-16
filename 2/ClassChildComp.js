import React from "react";

class Child extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            count : 1,
        }

        console.log("Child " + this.props.name + " Constructor")
    }

    componentDidMount(){
        console.log("Child "+  this.props.name  + " Component Mounted")
    }

    componentDidUpdate(){
        console.log("Child "+  this.props.name  + " Component Updated")
    }

    componentWillUnmount(){
        console.log("Child "+  this.props.name  + " Component Will Unmount")
    }

    render(){
        
        const counter = () => {
            this.setState({
                count : this.state.count + 1,
            })
        }

        console.log("Child " + this.props.name + " Rendered")

        return(
            <div>
                <h1>Hello {this.props.name} : {this.state.count}</h1>
                <button onClick={counter}>Change Child State Button</button>
            </div>
        )
    }
}

export default Child