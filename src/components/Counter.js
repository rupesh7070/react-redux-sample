import React from "react"

class Counter extends React.Component {
    constructor(props, context) {
        console.log("in constructore")
        super(props, context);
        this.state = {
            count: 0
        }
    }

    incrementCounter() {
        this.setState((oldState,props) =>({
            count: oldState.count + props.incrementBy
        }))
    }

    render() {
        console.log("calling render")
        return (
            <div>
                <button className="btn btn-dark" onClick={() => this.incrementCounter()}>Increment by {this.props.incrementBy}</button>
                <label>{this.state.count}</label>
            </div>)
    }
}

export default Counter