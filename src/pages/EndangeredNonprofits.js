import React from 'react';
import Table from '../TableBase';
import {endpoint} from '../App';
import axios from 'axios';

export default class EndangeredNonprofits extends Table {

    onClickAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        var object = {};
        formData.forEach((value, key) => object[key] = value);

        axios.post(`${endpoint}insert/nonprofits`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to endangered species table failed');
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
        return this.props.data.map((dataPoint, index) => 
            // data row
            <tr key={index}>
                <td>{dataPoint.animal}</td>
                <td>{dataPoint.nonprofit}</td>
                <td>{dataPoint.animalId}</td>
                <td>{dataPoint.nonprofitId}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={this.onClickDelete}>Delete</button></td>
            </tr>
        );
    }
}