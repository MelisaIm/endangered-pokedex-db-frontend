import React from 'react';
import Table from '../TableBase';
import {endpoint} from '../App';
import axios from 'axios';

export default class Species extends Table {

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
        const inputs = ['scientificName', 'commonName', 'genus', 'family', 'order', 'class', 'phylum', 'cause', 'photoUrl'];
        return (<form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
                    {inputs.map((key, index) => <div key={`div-${index}-${key}`} className="formItem">
                            <label key={`label-${index}-${key}`}>{key}</label><br/>
                            <input required key={`input-${index}-${key}`} type="text" id={key} name={key}/><br/><br/>
                    </div>)}
                    <div className="formItem">
                    <label htmlFor="captivityPlace">Choose a captivityPlace</label>
                        <select name="captivityPlaceId" id="captivityPlace">
                        {this.props.captivityPlaces.map((value, index) => {
                            return <option required key={index} value={value.zooId}>{`${value.zooName}`}</option>
                        })}
                        </select> 
                    </div>
            <input type="submit" value="Add Row"/>
        </form>) 
    }
    
    renderTable() {
        return this.props.data.map(species => 
            // data row
            <tr key={species.animalId}>
                <td>{species.animalId}</td>
                <td>{species.scientificName}</td>
                <td>{species.commonName}</td>
                <td>{species.genus}</td>
                <td>{species.family}</td>
                <td>{species.order}</td>
                <td>{species.class}</td>
                <td>{species.phylum}</td>
                <td>{species.cause}</td>
                <td>{species.photoUrl}</td>
                <td>{species.lastUpdate}</td>
                <td>{species.captivityPlaceId}</td>
                <td><button onClick={() => this.onClickUpdate(species, "endangeredSpecies")}>Save Changes</button><button 
                onClick={() => this.onClickDelete('endangeredSpecies', {data: {animalId: species.animalId}})}>Delete</button></td>
            </tr>
        );
    }
}