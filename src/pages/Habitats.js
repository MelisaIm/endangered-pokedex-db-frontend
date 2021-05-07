import React from 'react';
import Table from '../TableBase';

export default class Habitats extends Table {

    renderTable() {
        return this.props.data.map(habitat => 
            // data row
            <tr key={habitat.habitatId}>
                <td>{habitat.habitatId}</td>
                <td>{habitat.continent}</td>
                <td>{habitat.country}</td>
                <td>{habitat.biome}</td>
                <td>{habitat.nativeHabitatCoordinates}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={this.onClickDelete}>Delete</button></td>
            </tr>
        );
    }
}