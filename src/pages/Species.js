import React from 'react';
import Table from '../TableBase';

export default class Species extends Table {

    renderTable() {
        return this.state.data.map(species => 
            // data row
            <tr key={species.animalId}>
                <td>{species.animalId}</td>
                <td>{species.scientificName}</td>
                <td>{species.commonName}</td>
                <td>{species.genus}</td>
                <td>{species.family}</td>
                <td>{species.order}</td>
                <td>{species.class}</td>
                <td>{species.phylum}</td>
                <td>{species.cause}</td>
                <td>{species.photoUrl}</td>
                <td>{species.lastUpdate}</td>
                <td>{species.captivityPlaceId}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={this.onClickDelete}>Delete</button></td>
            </tr>
        );
    }
}