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
        axios.post(`${endpoint}insert/endangeredNonprofits`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to endangeredNonprofits table failed');
        });
    }

    renderForm() {
        return (<form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
                    <div className="formItem">
                    <label htmlFor="endangeredSpecies">Choose an endangered species:</label>
                        <select name="animalId" id="animals">
                        {this.props.endangeredSpecies.map((value, index) => {
                            return <option value={value.animalId} key={index}>{`${value.commonName} (${value.scientificName})`}</option>
                        })}
                        </select> 
                    </div>
                    <div className="formItem">
                    <label htmlFor="nonprofits">Choose a nonprofit:</label>
                        <select name="nonprofitId" id="nonprofit">
                        {this.props.nonprofits.map((value, index) => {
                            return <option value={value.nonprofitId} key={index}>{`${value.nonprofitName}`}</option>
                        })}
                        </select> 
                    </div>
            <input type="submit" value="Add Row"/>
        </form>) 
    }

    renderTable() {
        return this.props.data.map((dataPoint, index) => 
            // data row
            <tr id={dataPoint.endangeredNonprofitId} key={index}>
                <td>{dataPoint.endangeredNonprofitId}</td>
                <td>{dataPoint.animal}</td>
                <td>{dataPoint.nonprofit}</td>
                <td contentEditable className="animalId editCursor">{dataPoint.animalId}</td>
                <td contentEditable className="nonprofitId editCursor">{dataPoint.nonprofitId}</td>
                <td><button onClick={() => {
                    const row = document.getElementById(dataPoint.endangeredNonprofitId);
                    const object = {
                        endangeredNonprofitId: dataPoint.endangeredNonprofitId,
                        animalId: row.getElementsByClassName("animalId")[0].innerHTML || "",
                        nonprofitId: row.getElementsByClassName("nonprofitId")[0].innerHTML || ""
                    }
                    this.onClickUpdate('endangeredNonprofits', object)
                }}>Save Changes</button>
                <button onClick={() => this.onClickDelete('endangeredNonprofits', {data: {endangeredNonprofitId: dataPoint.endangeredNonprofitId}})}>Delete</button></td>
            </tr>
        );
    }
}