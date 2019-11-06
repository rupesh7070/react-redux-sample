import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: {
                title: ''
            }
        }
        this.addCourse = this.addCourse.bind(this)
    }

    addCourse(event) {
        const courses = {...this.state.courses, title: event.target.value}
        this.setState({courses})
    }
    handleFormSubmit(event){
        event.preventDefault()
    }


    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <h1> Courses </h1>
                <h4>{this.state.courses.title} </h4>
                <h2> Add Course</h2>
                <input type="text" onChange={this.addCourse} value={this.state.courses.title}/>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

Courses.propTypes = {};

export default Courses;
