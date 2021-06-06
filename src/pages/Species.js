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
        const inputs = ['scientificName', 'commonName', 'genus', 'family', 'kingdomOrder', 'class', 'phylum', 'cause', 'photoUrl'];
        return (<form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
                    {inputs.map((key, index) => <div key={`div-${index}-${key}`} className="formItem">
                            <label key={`label-${index}-${key}`}>{key}</label><br/>
                            <input required key={`input-${index}-${key}`} type="text" id={key} name={key}/><br/><br/>
                    </div>)}
                    <div className="formItem">
                    <label htmlFor="captivityPlace">Choose a captivityPlace</label>
                        <select name="captivityPlaceId" id="captivityPlace">
                            <option required key={"None"} value="">Not Applicable</option>
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
            <tr id={species.animalId} key={species.animalId}>
                <td className="animalId">{species.animalId}</td>
                <td contentEditable className="scientificName editCursor">{species.scientificName}</td>
                <td contentEditable className="commonName editCursor">{species.commonName}</td>
                <td contentEditable className="genus editCursor">{species.genus}</td>
                <td contentEditable className="family editCursor">{species.family}</td>
                <td contentEditable className="kingdomOrder editCursor">{species.kingdomOrder}</td>
                <td contentEditable className="class editCursor">{species.class}</td>
                <td contentEditable className="phylum editCursor">{species.phylum}</td>
                <td contentEditable className="cause editCursor">{species.cause}</td>
                <td contentEditable className="photoUrl editCursor">{species.photoUrl}</td>
                <td>{species.lastUpdate}</td>
                <td contentEditable className="captivityPlaceId editCursor">{species.captivityPlaceId}</td>
                <td><button onClick={(e) => {
                    const row = document.getElementById(species.animalId);
                
                    const object = {
                        animalId: species.animalId,
                        scientificName: row.getElementsByClassName("scientificName")[0].innerText || "",
                        commonName: row.getElementsByClassName("commonName")[0].innerText || "",
                        genus: row.getElementsByClassName("genus")[0].innerText || "",
                        family: row.getElementsByClassName("family")[0].innerText || "",
                        kingdomOrder: row.getElementsByClassName("kingdomOrder")[0].innerText || "",
                        class: row.getElementsByClassName("class")[0].innerText || "",
                        phylum: row.getElementsByClassName("phylum")[0].innerText || "",
                        cause: row.getElementsByClassName("cause")[0].innerText || "",
                        photoUrl: row.getElementsByClassName("photoUrl")[0].innerText || "",
                        captivityPlaceId: row.getElementsByClassName("captivityPlaceId")[0].innerText || ""
                    };
                    this.onClickUpdate("endangeredSpecies", object)}}
                    >Save Changes</button><button 
                onClick={() => this.onClickDelete('endangeredSpecies', {data: {animalId: species.animalId}})}>Delete</button></td>
            </tr>
        );
    }
}