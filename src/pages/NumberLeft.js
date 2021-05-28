import React from 'react';
import Table from '../TableBase';
import {endpoint} from '../App';
import axios from 'axios';

export default class NumberLeft extends Table {

    onClickAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        var object = {};
        formData.forEach((value, key) => object[key] = value);

        axios.post(`${endpoint}insert/endangeredSpecies`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to endangered species table failed');
        });
    }

    renderForm() {
        const inputs = ['inCaptivity', 'inWild', 'decade'];
        const conservationStatusList = ['extinct', 'extinct in the wild', 'critically endangered', 'endangered', 'vulnerable', 'near threatened', 'least concern', 'data deficient', 'not evaluated'];
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
            <tr key={dataPoint.numberLeftId}>
                <td>{dataPoint.numberLeftId}</td>
                <td>{dataPoint.inCaptivity}</td>
                <td>{dataPoint.inWild}</td>
                <td>{dataPoint.decade}</td>
                <td>{dataPoint.conservationStatus}</td>
                <td>{dataPoint.animal}</td>
                <td>{dataPoint.animalId}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={this.onClickDelete}>Delete</button></td>
            </tr>
        );
    }
}