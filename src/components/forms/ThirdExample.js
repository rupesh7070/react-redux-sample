import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ThirdExample extends Component {

    constructor(props) {
        super(props);
        this.state=({
            value:""
        })
        this.handleChanges= this.handleChanges.bind(this)
        this.selectChange = this.selectChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)

    }
    handleChanges(event){
        this.setState({
            value:event.target.value
        })

    }
    selectChange(event){
        this.setState({
            selected:event.target.value
        })

    }
    handleFormSubmit(event){
        alert(`${this.state.value} ${this.state.selected}`)
        event.preventDefault()

    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label> Enter your name </label>
                <textarea onChange={this.handleChanges} value={this.state.value}></textarea>

                <label>Topic</label>
                <select onChange={this.selectChange} value={this.state.selected}>
                    <option value="react"> react </option>
                    <option value="angular"> angular </option>
                    <option value="vue"> vue </option>
                </select>

                <button onClick={this.handleFormSubmit}>Submit</button>
            </form>
        );
    }
}

ThirdExample.propTypes = {};

export default ThirdExample;
