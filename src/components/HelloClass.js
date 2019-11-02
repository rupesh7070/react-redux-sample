import React from "react"

class HelloClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Rupesh",
            age: 21
        }
    }

    render() {
        return (
            <div>
                <h1> Time is {this.props.time}</h1>
                <h1> This is from state object {this.state.name} and age is {this.state.age} </h1>
            </div>
        )
    }
}

export default HelloClass