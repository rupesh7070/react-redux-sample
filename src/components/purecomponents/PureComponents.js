import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class PureComponents extends PureComponent {
    constructor(props) {
        super(props);
    }


    render() {
        console.log("Pure componet render")
        return (
            <div>
                Pure Compoent {this.props.name}
            </div>
        );
    }
}

PureComponents.propTypes = {};

export default PureComponents;