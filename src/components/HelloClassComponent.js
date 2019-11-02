import React from "react"
class HelloClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Ritest",
            age: 45,
            message: "Welcome Visitor"
        }
    }
    changeMessage() {
        this.setState({
            message: "Thanks for subscription"
        })
    }
    changeAge(){
        this.setState({
            age:this.state.age+1
        })
    }
    render() {
        return (
            <div>
                <h1> Hellow from class component {this.props.name} </h1>
                <h1> Reading from state {this.state.name} and age {this.state.age} and {this.state.message} </h1>
                <button className="btn btn-danger" onClick={() => this.changeMessage()}> Subscribe</button>
                <button className="btn btn-secondary" onClick={() => this.changeAge()}> CLick to add age {this.state.age} </button>

            </div>
        )
    }
}
export default HelloClassComponent