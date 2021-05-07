import React from 'react';
import Table from '../TableBase';

export default class NumberLeft extends Table {

    renderTable() {
        return this.state.data.map(dataPoint => 
            // data row
            <tr key={dataPoint.numberLeftId}>
                <td>{dataPoint.numberLeftId}</td>
                <td>{dataPoint.animalId}</td>
                <td>{dataPoint.inCaptivity}</td>
                <td>{dataPoint.inWild}</td>
                <td>{dataPoint.decade}</td>
                <td>{dataPoint.conservationStatus}</td>
                <td><button>Edit</button><button>Delete</button></td>
            </tr>
        );
    }
}