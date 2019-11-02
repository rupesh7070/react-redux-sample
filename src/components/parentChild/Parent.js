import React from "react"
import Child from "./childComponent";

class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parentName: "Parent"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(name) {
        alert(`Hello ${this.state.parentName} from ${name} `)
    }

    render() {
        return (
            <div >
                <Child greetHandler={this.greetParent}/>
            </div>
        )
    }
}
export  default Parent