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

    onClickAdd(e) {
        e.preventDefault();
        //TODO
        alert("I don't do anything yet!");
    }

    search(e) {        
        let input, filter, table, tr;
        input = e.target.value;
        filter = input.toUpperCase();
        table = document.getElementsByClassName("myTable")[0];
        tr = table.getElementsByTagName("tr");
        if (input.length) {
            // Loop through all table rows, and hide those who don't match the search query
            for (let i = 1; i < tr.length; i++) {
                let tdArray = Array.from(tr[i].getElementsByTagName("td"));
                let found = tdArray.find((el) =>  {
                    let reg = new RegExp(`${filter}`);
                    console.log(reg, el, filter, reg.test(filter))
                    return reg.test(el.innerText.toUpperCase());
                }); // regex test partial string
                if (found) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        } else {
            for (let i = 0; i < tr.length; i++) {
                tr[i].style.display = "";
            }
        }   
    }

    render() {
        return (<div className="tableClass">
        <div className="nes-container with-title is-rounded">
            <p className="title">{this.state.title}</p>
            <p>{this.state.description}</p>
        </div>
        <form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
            {this.state.data && this.state.data.length && Object.keys(this.state.data[0]).map((key, index) => {
                return (<div key={`div-${index}-${key}`} className="formItem">
                        <label key={`label-${index}-${key}`}>{key}</label><br/>
                        <input key={`input-${index}-${key}`} type="text" id={key} name={key}/><br/><br/>
                </div>
                )
            })}
            <input type="submit" value="Add Row"/>
        </form> 
        <label>Search</label>
        <input type="text" id="myInput" onKeyUp={this.search} placeholder="Search for ..."/><br/>
        <table className="nes-table is-bordered is-centered is-rounded is-dark myTable">
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