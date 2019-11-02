import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Hover extends Component {
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
                <h1 onMouseOver={this.incrementCount}> This is hovered {this.state.count} times</h1>

            </div>
        );
    }
}

Hover.propTypes = {};

export default Hover;
