import React from 'react';
import Table from '../TableBase';
import {endpoint} from '../App';
import axios from 'axios';

export default class EndangeredHabitats extends Table {
    
    onClickAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        var object = {};
        formData.forEach((value, key) => object[key] = parseInt(value));
        axios.post(`${endpoint}insert/endangeredHabitats`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to endangeredHabitats table failed');
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
                    <label htmlFor="nativeHabitats">Choose a native habitat:</label>
                        <select name="habitatId" id="nativeHabitat">
                        {this.props.nativeHabitats.map((value, index) => {
                            return <option value={value.habitatId} key={index}>{`${value.country} | ${value.biome}`}</option>
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
                <td>{dataPoint.animalId}</td>
                <td>{dataPoint.habitatId}</td>
                <td>{dataPoint.location}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button>
                <button onClick={() => this.onClickDelete('endangeredHabitats', {data: {animalId: dataPoint.animalId, habitatId: dataPoint.habitatId}})}>Delete</button></td>
            </tr>
        );
    }
}