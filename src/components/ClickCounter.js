import React from "react"

class ClickCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            logged: true
        }
        this.increment = this.increment.bind(this)
    }

    increment() {
        if (this.state.count > 5) {
            this.setState({
                count: this.state.count - 1
            })
        } else {
            this.setState({
                count: this.state.count + 1
            })
        }
    }

    render() {
        return (
            this.state.logged && <div> Welcome Rupesh</div>
        )
    }

}

export default ClickCounter