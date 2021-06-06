import React from 'react';
import Table from '../TableBase';
import {endpoint} from '../App';
import axios from 'axios';

export default class Habitats extends Table {

    onClickAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        var object = {};
        formData.forEach((value, key) => object[key] = value);

        axios.post(`${endpoint}insert/nativeHabitats`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to nativeHabitats table failed');
        });
    }

    renderForm() {
        const inputs = ['continent', 'country', 'biome', 'nativeHabitatCoordinates'];
        return (<form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
                    {inputs.map((key, index) => <div key={`div-${index}-${key}`} className="formItem">
                            <label key={`label-${index}-${key}`}>{key}</label><br/>
                            <input required key={`input-${index}-${key}`} type="text" id={key} name={key}/><br/><br/>
                    </div>)}
            <input type="submit" value="Add Row"/>
        </form>) 
    }
    renderTable() {
        return this.props.data.map(habitat => 
            // data row
            <tr id={habitat.habitatId} key={habitat.habitatId}>
                <td>{habitat.habitatId}</td>
                <td contentEditable className="continent">{habitat.continent}</td>
                <td contentEditable className="country">{habitat.country}</td>
                <td contentEditable className="biome">{habitat.biome}</td>
                <td contentEditable className="nativeHabitatCoordinates">{habitat.nativeHabitatCoordinates}</td>
                <td><button onClick={() => {
                    const row = document.getElementById(habitat.habitatId);
                    const object = {
                        habitatId: habitat.habitatId,
                        continent: row.getElementsByClassName("continent")[0].innerText || "",
                        country: row.getElementsByClassName("country")[0].innerText || "",
                        biome: row.getElementsByClassName("biome")[0].innerText || "",
                        nativeHabitatCoordinates: row.getElementsByClassName("nativeHabitatCoordinates")[0].innerText || "",
                    }
                    this.onClickUpdate("nativeHabitats", object);
                }}>Save Changes</button>
                <button onClick={() => this.onClickDelete('nativeHabitats', {data: {habitatId: habitat.habitatId}})}>Delete</button></td>
            </tr>
        );
    }
}