import React from 'react';
import Table from '../TableBase';

export default class EndangeredNonprofits extends Table {

    renderTable() {
        return this.state.data.map((dataPoint, index) => 
            // data row
            <tr key={index}>
                <td>{dataPoint.animalId}</td>
                <td>{dataPoint.nonprofitId}</td>
            </tr>
        );
    }
}