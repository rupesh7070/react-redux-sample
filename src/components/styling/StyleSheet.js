import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./myStyle.css"

class StyleExamples extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        let classNameTo = this.props.primary ? 'primary' : 'secondary'
        return (
            <div>
                <h1 className= { `${classNameTo} font-xl`}> Style Sheet</h1>
            </div>
        );
    }
}

export default StyleExamples;
