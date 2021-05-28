import React from 'react';
import Table from '../TableBase';
import {endpoint} from '../App';
import axios from 'axios';

export default class EndangeredHabitats extends Table {

    renderTable() {
        return this.props.data.map((dataPoint, index) => 
            // data row
            <tr key={index}>
                <td>{dataPoint.animal}</td>
                <td>{dataPoint.animalId}</td>
                <td>{dataPoint.habitatId}</td>
                <td>{dataPoint.location}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={this.onClickDelete}>Delete</button></td>
            </tr>
        );
    }
}