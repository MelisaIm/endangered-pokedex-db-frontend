import React from 'react';
import './TableBase.css'

export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTable(data) {
        // override in children
    }

    renderTableHeader() {
        if (this.props.data && this.props.data.length) {
            let header = Object.keys(this.props.data[0]);
            header.push("");
            return <tr>{header.map((key, index) => <th key={index}>{key}</th>)}</tr>
        } 
    }

    onClickAdd(e) {
        e.preventDefault();
        //TODO
        alert("I don't do anything yet!");
    }

    onClickDelete = (data, table) => {
        if (table == 'animals') { //only delete animals for now
            this.props.onDelete(table, data);
        }
    }

    onClickUpdate(data, table) {
        console.log("test", data);
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
            <p className="title">{this.props.title}</p>
            <p>{this.props.description}</p>
        </div>
        <form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
            {this.props.data && this.props.data.length && Object.keys(this.props.data[0]).map((key, index) => {
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
        <table className="myTable">
            <thead>
            {this.renderTableHeader()}
            </thead>
            <tbody>
            {this.renderTable(this.props.data)}
            </tbody>
        </table>
        </div>)
    }
}