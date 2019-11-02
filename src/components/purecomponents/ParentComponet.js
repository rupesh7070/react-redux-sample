import React, {Component} from 'react';
import RegularComponent from "./RegularComponent";
import PureComponents from "./PureComponents";

class ParentComponet extends PureComponents {
    constructor(props) {
        super(props);
        this.state = {
            name: "Rupesh1"
        }
    }

    componentDidMount() {
        console.log("componentDidMount of Parent Component")
        setInterval(() => {
            this.setState({
                name: "Rupesh"
            })
        }, 5000)
    }

    render() {
        console.log("PArent render")
        return (
            <div>
                Parent Component
                <RegularComponent name = {this.state.name}/>
                <PureComponents name ={this.state.name} />
            </div>
        );
    }
}

export default ParentComponet;
