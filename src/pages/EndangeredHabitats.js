import React from 'react';
import Table from '../TableBase';

export default class EndangeredHabitats extends Table {

    renderTable() {
        return this.state.data.map((dataPoint, index) => 
            // data row
            <tr key={index}>
                <td>{dataPoint.animalId}</td>
                <td>{dataPoint.habitatId}</td>
            </tr>
        );
    }
}