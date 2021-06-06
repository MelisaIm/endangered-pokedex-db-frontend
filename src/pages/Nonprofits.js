import React from 'react';
import Table from '../TableBase';
import {endpoint} from '../App';
import axios from 'axios';

export default class Nonprofits extends Table {

    onClickAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        var object = {};
        formData.forEach((value, key) => object[key] = value);

        axios.post(`${endpoint}insert/nonprofits`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to nonprofits table failed');
        });
    }

    renderForm() {
        const inputs = ['nonprofitName', 'nonprofitWebsite'];
        return (<form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
                    {inputs.map((key, index) => <div key={`div-${index}-${key}`} className="formItem">
                            <label key={`label-${index}-${key}`}>{key}</label><br/>
                            <input required key={`input-${index}-${key}`} type="text" id={key} name={key}/><br/><br/>
                    </div>)}
            <input type="submit" value="Add Row"/>
        </form>) 
    }

    renderTable() {
        return this.props.data.map(nonprofit => 
            // data row
            <tr id={nonprofit.nonprofitId} key={nonprofit.nonprofitId}>
                <td>{nonprofit.nonprofitId}</td>
                <td contentEditable className="nonprofitName editCursor">{nonprofit.nonprofitName}</td>
                <td contentEditable className="nonprofitWebsite editCursor">{nonprofit.nonprofitWebsite}</td>
                <td><button onClick={(e) => {
                    const row = document.getElementById(nonprofit.nonprofitId);
                    const object = {
                        nonprofitId: nonprofit.nonprofitId,
                        nonprofitName: row.getElementsByClassName("nonprofitName")[0].innerText || "",
                        nonprofitWebsite: row.getElementsByClassName("nonprofitWebsite")[0].innerText || ""
                    }
                    console.log(object);
                    this.onClickUpdate("nonprofits", object)
                }}>Save Changes</button>
                <button onClick={() => this.onClickDelete('nonprofits', {data: {nonprofitId: nonprofit.nonprofitId}})}>Delete</button></td>
            </tr>
        );
    }
}