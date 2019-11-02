import React from "react"

// binding events to event handlers
class EventsExample extends React.Component {
    constructor(props) {
        super(props)
        let name= "Rupesh"
        this.state = {
            message1: "Click Me",
            message2: "Click Me",
            message3: "Click Me",
            message4 : ` This is long
            message on two lines ${name} `,
            message5 : `${this.makeUpperCase("enter name") } `

        }

        this.clickThird = this.clickThird.bind(this)
    }

    makeUpperCase(text){
        return text.toUpperCase()
    }

    clickFirst() {
        this.setState({
            message1: "first"
        })
    }

    clickSecond() {
        this.setState({
            message2: "second"
        })
    }

    clickThird() {
        alert(this.state.message3)
        if (this.state.message3 === "third") {
            this.setState({
                message3: "click me"
            })
        }else{
            this.setState({
                message3: "third"
            })

        }
    }

    render() {

        return (
            <div align="middle">
                <button className="btn btn-danger" onClick={this.clickFirst.bind(this)}> {this.state.message1} </button>
                <button className="btn btn-dark" onClick={() => this.clickSecond()}>{this.state.message5} </button>
                <button className="btn btn-primary" onClick={this.clickThird}> {this.state.message4} </button>
            </div>
        )
    }
}

export default EventsExample
