import React from 'react';
import Table from '../TableBase';

export default class EndangeredHabitats extends Table {

    renderTable() {
        return this.props.data.map((dataPoint, index) => 
            // data row
            <tr key={index}>
                <td>{dataPoint.animalId}</td>
                <td>{dataPoint.habitatId}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={this.onClickDelete}>Delete</button></td>
            </tr>
        );
    }
}