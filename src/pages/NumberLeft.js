import React from 'react';
import Table from '../TableBase';

export default class NumberLeft extends Table {

    renderTable() {
        return this.props.data.map(dataPoint => 
            // data row
            <tr key={dataPoint.numberLeftId}>
                <td>{dataPoint.numberLeftId}</td>
                <td>{dataPoint.inCaptivity}</td>
                <td>{dataPoint.inWild}</td>
                <td>{dataPoint.decade}</td>
                <td>{dataPoint.conservationStatus}</td>
                <td>{dataPoint.animal}</td>
                <td>{dataPoint.animalId}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={this.onClickDelete}>Delete</button></td>
            </tr>
        );
    }
}