import React from 'react';
import './TableBase.css'

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            data: props.data, 
            title: props.title, 
            description: props.description
        }
    }

    renderTable(data) {
        // override in children
    }

    renderTableHeader() {
        let header = Object.keys(this.state.data[0]);
        return <tr>{header.map((key, index) => {
            return <th key={index}>{key}</th>
         })}</tr>
    }

    render() {
        return (<div className="tableClass">
        <h1>{this.state.title}</h1>
        <h3>{this.state.description}</h3>
        <table>
            <thead>
            {this.renderTableHeader()}
            </thead>
            <tbody>
            {this.renderTable(this.state.data)}
            </tbody>
        </table>
        </div>)
    }
}