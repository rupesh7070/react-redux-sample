import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Person from "./Person";

class PersonsList extends Component {

    constructor() {
        super()
    }

    render() {
        let persons = [
            {
                name: "Rup",
                age: 44

            },
            {
                name: "Rit",
                age: 42


            },
            {
                name: "Anu",
                age: 43
            }
        ]

        var personComponentList = persons.map(p => (<Person key={p.name} person={p}/>))
        return (
            <div>
                {personComponentList}
            </div>
        );
    }
}

export default PersonsList;
