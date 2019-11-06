import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home </NavLink>
                <NavLink to="/cake"> Cake </NavLink>
                <NavLink to="/book"> Book </NavLink>
                <NavLink to="/agGrid"> Ag-Grid </NavLink>
                <NavLink to="/course"> Courses </NavLink>
                <NavLink to="/play"> Play Area </NavLink>
            </div>
        );
    }
}

Navigation.propTypes = {};

export default Navigation;
