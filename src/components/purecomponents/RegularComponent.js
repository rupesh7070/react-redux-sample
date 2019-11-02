import React, {Component} from 'react';
import PropTypes from 'prop-types';

class RegularComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("REgular componet render")
        return (
            <div>
                Regular Componet {this.props.name}
            </div>
        );
    }
}

RegularComponent.propTypes = {};

export default RegularComponent;
