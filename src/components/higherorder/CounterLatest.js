import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CounterLatest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this)
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })

    }

    render() {
        return (
            <div>
                <button onClick={this.incrementCount}> Clicked {this.state.count} times</button>

            </div>
        );
    }
}

CounterLatest.propTypes = {};

export default CounterLatest;
