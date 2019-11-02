import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css'
import axios from 'axios'

class AgGridExample extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            columnDefs: [
                {
                    headerName: "PostId", field: "postId", sortable: true, filter: true, checkboxSelection: true
                },
                {
                    headerName: "ID", field: "id", sortable: true, filter: true
                }, {
                    headerName: "Name", field: "name", sortable: true, filter: true
                },
                {
                    headerName: "Email", field: "email", sortable: true, filter: true
                },
                {
                    headerName: "Body", field: "body", sortable: true, filter: true
                }],
            rowData: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(response => {
                const data = response.data
                this.setState({
                    rowData: data
                })
            })
    }

    handleClick(event) {
        const selectedNode = this.gridApi.getSelectedRows()
        const selectedDataInString = selectedNode.map(data => data.postId + ' ' + data.name).join(',')
    }


    render() {
        return (
            <div className="ag-theme-balham-dark" style={
                {height: '500px', width: '600px'}
            }>
                <button onClick={this.handleClick}>Click to get Data for selected rows</button>
                <AgGridReact onGridReady={params => this.gridApi = params.api} rowSelection="multiple"
                             columnDefs={this.state.columnDefs} rowData={this.state.rowData}/>
            </div>
        );
    }
}

AgGridExample.propTypes = {};

export default AgGridExample;
