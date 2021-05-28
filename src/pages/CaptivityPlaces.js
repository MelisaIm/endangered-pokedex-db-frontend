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
            <tr key={place.zooId}>
                <td>{place.zooId}</td>
                <td>{place.zooName}</td>
                <td>{place.zooCity}</td>
                <td>{place.zooState}</td>
                <td>{place.zooCountry}</td>
                <td>{place.zooCoordinates}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={() => {}}>Delete</button></td>
            </tr>
        );
    }
}