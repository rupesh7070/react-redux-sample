import React from "react"

class SumClass extends React.Component{

    render() {
        return(
            <h> {this.props.a} + {this.props.b}  = {this.props.a+ this.props.b} </h>
        )
    }
}
export default SumClass