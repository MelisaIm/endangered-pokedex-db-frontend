import React from 'react';
import Table from '../TableBase';
import {endpoint} from '../App';
import axios from 'axios';

export default class CaptivityPlaces extends Table {
    
    onClickAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        var object = {};
        formData.forEach((value, key) => object[key] = value);

        axios.post(`${endpoint}insert/captivityPlaces`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to captivityPlaces table failed');
        });
    }

    renderForm() {
        const inputs = ['zooName', 'zooCity','zooState', 'zooCountry', 'zooCoordinates'];
        return (<form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
                    {inputs.map((key, index) => <div key={`div-${index}-${key}`} className="formItem">
                            <label key={`label-${index}-${key}`}>{key}</label><br/>
                            <input required key={`input-${index}-${key}`} type="text" id={key} name={key}/><br/><br/>
                    </div>)}
            <input type="submit" value="Add Row"/>
        </form>) 
    }
    renderTable() {
        return this.props.data.map(place => 
            // data row
            <tr id={place.zooId} key={place.zooId}>
                <td>{place.zooId}</td>
                <td contentEditable className="zooName editCursor">{place.zooName}</td>
                <td contentEditable className="zooCity editCursor">{place.zooCity}</td>
                <td contentEditable className="zooState editCursor">{place.zooState}</td>
                <td contentEditable className="zooCountry editCursor">{place.zooCountry}</td>
                <td contentEditable className="zooCoordinates editCursor">{place.zooCoordinates}</td>
                <td><button onClick={() => {
                    const row = document.getElementById(place.zooId);
                    const object = {
                        zooId: place.zooId,
                        zooName: row.getElementsByClassName("zooName")[0].innerText || "",
                        zooCity: row.getElementsByClassName("zooCity")[0].innerText || "",
                        zooState: row.getElementsByClassName("zooState")[0].innerText || "",
                        zooCountry: row.getElementsByClassName("zooCountry")[0].innerText || "",
                        zooCoordinates: row.getElementsByClassName("zooCoordinates")[0].innerText || "",
                    }    
                    this.onClickUpdate("captivityPlaces", object)
                }}>Save Changes</button>
                <button onClick={() => this.onClickDelete('captivityPlaces', {data: {zooId: place.zooId}})}>Delete</button></td>
            </tr>
        );
    }
}