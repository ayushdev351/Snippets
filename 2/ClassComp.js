import React from "react";

class ClassComp extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0,
        }
    }

    render(){

        const counter = () => {
            this.setState({
                count : this.state.count + 1,
            })
        }

        return(
            <div>
                <h1>Class Component</h1>
                <h2>Props : {this.props.propsData}</h2>
                <h2>State : {this.state.count}</h2>
                <button onClick={counter}>Increment Count</button>
            </div>
        )
    }
}

export default ClassComp