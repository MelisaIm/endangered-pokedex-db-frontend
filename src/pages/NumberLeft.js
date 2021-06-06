import React from 'react';
import Table from '../TableBase';
import {endpoint} from '../App';
import axios from 'axios';

const conservationStatusList = ['extinct', 'extinct in the wild', 'critically endangered', 'endangered', 'vulnerable', 'near threatened', 'least concern', 'data deficient', 'not evaluated'];
export default class NumberLeft extends Table {

    onClickAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        var object = {};
        formData.forEach((value, key) => object[key] = value);

        axios.post(`${endpoint}insert/numberLeft`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to numberLeft table failed');
        });
    }

    renderForm() {
        const inputs = ['inCaptivity', 'inWild', 'decade'];
        return (<form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
                    {inputs.map((key, index) => <div key={`div-${index}-${key}`} className="formItem">
                            <label key={`label-${index}-${key}`}>{key}</label><br/>
                            <input required key={`input-${index}-${key}`} type="text" id={key} name={key}/><br/><br/>
                    </div>)}
                    <div className="formItem">
                    <label htmlFor="conservationStatus">Endangered Status: </label>
                        <select name="conservationStatus" id="conservationStatus">
                        {conservationStatusList.map((value, index) => {
                            return <option required key={index} value={value}>{`${value}`}</option>
                        })}
                        </select> 
                    </div>
                    <div className="formItem">
                    <label htmlFor="animal">Endangered Species: </label>
                        <select name="animalId" id="animals">
                        {this.props.endangeredSpecies.map((value, index) => {
                            return <option value={value.animalId} key={index}>{`${value.commonName} (${value.scientificName})`}</option>
                        })}
                        </select> 
                    </div>
            <input type="submit" value="Add Row"/>
        </form>) 
    }

    renderTable() {
        return this.props.data.map(dataPoint => 
            // data row
            <tr id={dataPoint.numberLeftId} key={dataPoint.numberLeftId}>
                <td>{dataPoint.numberLeftId}</td>
                <td contentEditable className="inCaptivity editCursor">{dataPoint.inCaptivity}</td>
                <td contentEditable className="inWild editCursor">{dataPoint.inWild}</td>
                <td contentEditable className="decade editCursor">{dataPoint.decade}</td>
                <td contentEditable className="conservationStatus editCursor">
                    <select name="conservationStatus" id="conservationStatusSelect">
                        {conservationStatusList.map((value, index) => {
                            return <option selected={value === dataPoint.conservationStatus} required key={index} value={value}>{`${value}`}</option>
                        })}
                    </select>
                    </td> 
                <td>{dataPoint.animal}</td>
                <td contentEditable className="animalId editCursor">{dataPoint.animalId}</td>
                <td><button onClick={() => {
                    const row = document.getElementById(dataPoint.numberLeftId);
                    const object = {
                        numberLeftId: dataPoint.numberLeftId,
                        inCaptivity: row.getElementsByClassName('inCaptivity')[0].innerText || "",
                        inWild: row.getElementsByClassName('inWild')[0].innerText || "",
                        decade: row.getElementsByClassName('decade')[0].innerText || "",
                        conservationStatus: document.getElementById('conservationStatusSelect').value || "",
                        animalId: row.getElementsByClassName('animalId')[0].innerText || ""
                    }

                    this.onClickUpdate("numberLeft", object);
                }}>Save Changes</button><button onClick={() => this.onClickDelete('numberLeft', {data: {numberLeftId: dataPoint.numberLeftId}})}>Delete</button></td>
            </tr>
        );
    }
}