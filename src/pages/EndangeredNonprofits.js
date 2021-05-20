import React from 'react';
import Table from '../TableBase';

export default class EndangeredNonprofits extends Table {

    renderTable() {
        return this.props.data.map((dataPoint, index) => 
            // data row
            <tr key={index}>
                <td>{dataPoint.animal}</td>
                <td>{dataPoint.nonprofit}</td>
                <td>{dataPoint.animalId}</td>
                <td>{dataPoint.nonprofitId}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={this.onClickDelete}>Delete</button></td>
            </tr>
        );
    }
}