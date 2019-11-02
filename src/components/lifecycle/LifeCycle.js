import React, {Component} from 'react';
import PropTypes from 'prop-types';

class LifeCycle extends Component {
    constructor(props, context) {
        console.log("constructor")
        super(props, context);
        this.state = {
            name: 'Rupesh'
        }
        this.changeName = this.changeName.bind(this)
    }

    componentDidMount() {
        console.log("componet did mount")
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("in shouldComponentUpdate")
        if(this.state !== nextState)
            return true;
        return false;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
         console.log("in componentDidUpdate")
    }
    componentWillUnmount() {
        console.log("this is componentWillUnmount")
    }

    changeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        console.log('render')
        return (
            <div>
                <input type="text" onChange={this.changeName}/>
                <button> Click to change name {this.state.name}</button>

            </div>
        );
    }
}

LifeCycle.propTypes = {};

export default LifeCycle;
