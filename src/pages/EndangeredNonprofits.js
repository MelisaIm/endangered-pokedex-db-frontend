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
        axios.post(`${endpoint}insert/endangered-nonprofits`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to endangered species table failed');
        });
    }

    renderForm() {
        // const inputs = ['endangeredSpecies', 'nonprofits'];
        return (<form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
                    <div className="formItem">
                    <label for="endangeredSpecies">Choose an endangered species:</label>
                        <select name="animalId" id="animals">
                        {this.props.endangeredSpecies.map((value, index) => {
                            return <option value={value.animalId}>{`${value.commonName} (${value.scientificName})`}</option>
                        })}
                        </select> 
                    </div>
                    <div className="formItem">
                    <label for="nonprofits">Choose a nonprofit:</label>
                        <select name="nonprofitId" id="nonprofit">
                        {this.props.nonprofits.map((value, index) => {
                            return <option value={value.nonprofitId}>{`${value.nonprofitName}`}</option>
                        })}
                        </select> 
                    </div>
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