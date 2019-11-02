import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <p> Hi there ... My Name is {this.props.person.name} and my age is {this.props.person.age}</p>
            </div>
        );
    }
}

export default Person;
