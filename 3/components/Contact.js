import React from "react";

class Contact extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0,
        }
    }

    render() {
        const counter = () => {
            this.setState({
                count : this.state.count + 1,
            })
        }

        return (
            <div>
                <h1>Contact</h1>
                <h1>Props : {this.props.data}</h1>
                <h1>State : {this.state.count}</h1>
                <button onClick={counter}>Click</button>
            </div>
        )
    }
}

export default Contact