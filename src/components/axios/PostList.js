import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            persons: []
        }

    }

    componentDidMount() {
        console.log("inside componentDidMount")
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const personsList = response.data
                this.setState({
                    persons: personsList
                })
            })
    }

    render() {
        console.log("going to render")
        return (
            <ul>
                {this.state.persons.map(p => <li> {p.title}</li>)}
            </ul>
        )
    }
}

export default PostList;
