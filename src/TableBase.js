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
        if (this.state.data && this.state.data.length) {
            let header = Object.keys(this.state.data[0]);
            return <tr>{header.map((key, index) => <th key={index}>{key}</th>)}</tr>
        } 
    }

    onClickAdd() {
        //TODO
        alert("I don't do anything yet!");
    }

    render() {
        return (<div className="tableClass">
        <div className="nes-container with-title is-rounded">
            <p className="title">{this.state.title}</p>
            <p>{this.state.description}</p>
        </div>
        <table className="nes-table is-bordered is-centered is-rounded is-dark">
            <thead>
            {this.renderTableHeader()}
            </thead>
            <tbody>
            {this.renderTable(this.state.data)}
            </tbody>
        </table>
        <button className="nes-btn" onClick={this.onClickAdd}>Add row</button>
        </div>)
    }
}