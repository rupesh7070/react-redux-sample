import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Error extends Component {
    render() {
        return (
            <div>
                <p className="danger"> This is error page....Route doesnt exist..</p>

            </div>
        );
    }
}

Error.propTypes = {};

export default Error;
