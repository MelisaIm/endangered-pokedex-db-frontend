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
            <tr id={dataPoint.endangeredHabitatId} key={index}>
                <td>{dataPoint.endangeredHabitatId}</td>
                <td>{dataPoint.animal}</td>
                <td contentEditable className="animalId">{dataPoint.animalId}</td>
                <td contentEditable className="habitatId">{dataPoint.habitatId}</td>
                <td>{dataPoint.location}</td>
                <td><button onClick={() => {
                    const row = document.getElementById(dataPoint.endangeredHabitatId);
                    const object = {
                        endangeredHabitatId: dataPoint.endangeredHabitatId,
                        animalId: row.getElementsByClassName("animalId")[0].innerHTML || "",
                        habitatId: row.getElementsByClassName("habitatId")[0].innerHTML || "",
                    }
                    this.onClickUpdate("endangeredHabitats", object);
                }}>Save Changes</button>
                <button onClick={() => this.onClickDelete('endangeredHabitats', {data: {endangeredHabitatId: dataPoint.endangeredHabitatId}})}>Delete</button></td>
            </tr>
        );
    }
}