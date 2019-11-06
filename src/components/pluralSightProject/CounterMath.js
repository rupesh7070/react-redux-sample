import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CounterMath extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        this.increase = this.increase.bind(this)
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h1 onClick={this.increase}> CLick to increment {this.state.count}</h1>
            </div>
        );
    }
}

CounterMath.propTypes = {};

export default CounterMath;
