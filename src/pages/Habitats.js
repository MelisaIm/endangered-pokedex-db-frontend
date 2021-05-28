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
            <tr key={habitat.habitatId}>
                <td>{habitat.habitatId}</td>
                <td>{habitat.continent}</td>
                <td>{habitat.country}</td>
                <td>{habitat.biome}</td>
                <td>{habitat.nativeHabitatCoordinates}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button>
                <button onClick={() => this.onClickDelete('nativeHabitats', {data: {habitatId: habitat.habitatId}})}>Delete</button></td>
            </tr>
        );
    }
}