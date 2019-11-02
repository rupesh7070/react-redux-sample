import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Forms extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userName: '',
            textarea: ''

        }
        this.handleUserNameChange = this.handleUserNameChange.bind(this)
        this.hanleTextAreaChanges = this.hanleTextAreaChanges.bind(this)
    }

    handleUserNameChange(event) {
        this.setState({
            userName: event.target.value
        })
    }

    hanleTextAreaChanges(event) {
        this.setState({
            textarea: event.target.value
        })
    }

    render() {
        return (
            <form>
                <ul className="list-group list-group-horizontal-sm">
                    <li className="list-group-item"> First one</li>
                    <li className="list-group-item"> Second one</li>
                </ul>

                <div className="dropdown">
                    <button className="btn btn-primary "> Drop Down Button</button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Link 1</a>
                        <a className="dropdown-item" href="#">Link 2</a>
                        <a className="dropdown-item" href="#">Link 3</a>
                    </div>
                </div>


                <div className="btn-group">
                    <button className="btn btn-primary"> Apple</button>
                    <button className="btn btn-secondary"> Orange</button>
                </div>

                <div>
                    <p className="bg-warning"> this is test</p>
                </div>
                <img src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" className="rounded-circle img-thumbnail"
                     width={300} height={200}/>

                <table className="table table-striped table-bordered table-dark" >
                    <thead>
                    <tr>
                        <td>First Name</td>
                        <td>Last Name</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Rupesh</td>
                        <td>Kumar</td>
                    </tr>
                    <tr>
                        <td>Rupesh</td>
                        <td>Kumar</td>
                    </tr>

                    </tbody>
                </table>


                <div>
                    <label> Enter User Name</label>
                    <input type="text" value={this.state.username} onChange={this.handleUserNameChange}/>
                </div>
                <div>
                    <label> Comments</label>
                    <textarea value={this.state.textarea} onChange={this.hanleTextAreaChanges}></textarea>
                </div>
                <div>
                    <select>
                        <option> This is first</option>
                        <option> This is second</option>
                    </select>
                </div>


            </form>
        );
    }
}

Forms.propTypes = {};

export default Forms;
