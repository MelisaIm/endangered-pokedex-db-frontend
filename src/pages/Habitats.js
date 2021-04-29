import React from 'react';
import Table from '../TableBase';

export default class Habitats extends Table {

    renderTable() {
        return this.state.data.map(habitat => 
            // data row
            <tr key={habitat.habitatId}>
                <td>{habitat.habitatId}</td>
                <td>{habitat.continent}</td>
                <td>{habitat.country}</td>
                <td>{habitat.biome}</td>
                <td>{habitat.nativeHabitatCoordinates}</td>
            </tr>
        );
    }
}