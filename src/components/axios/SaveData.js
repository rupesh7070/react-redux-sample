import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

class SaveData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            title: "",
            body: ""
        }
        this.fullData = []
        this.eventHandler = this.eventHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                    this.setState({
                        fullData: res.data
                    })
                }
            ).catch(error => {
                console.log("Got error" +error)
        })

    }

    eventHandler(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(respose => {
                console.log(" Suucess message " + respose)
            }).catch(error => {
            console.log("Error is " + error)
        })


    }

    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form className="container-fluid " onSubmit={this.handleSubmit}>
                    <div>
                        <label> Enter name </label>
                        <input type="text" name="userId" value={userId} onChange={this.eventHandler}/>
                    </div>
                    <div>
                        <label> Enter title </label>
                        <input type="text" name="title" value={title} onChange={this.eventHandler}/>
                    </div>
                    <div>
                        <label> Enter Body </label>
                        <input type="text" name="body" value={body} onChange={this.eventHandler}/>
                    </div>
                    <button type="submit"> Submit Form</button>


                </form>




            </div>
        );
    }
}

SaveData.propTypes = {};

export default SaveData;

