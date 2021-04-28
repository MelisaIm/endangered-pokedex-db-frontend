import React from 'react';
import Table from '../TableBase';

export default class Species extends Table {
    constructor(props) {
        super(props);

        this.state = {
            data: props.data, 
            title: props.title, 
            description: props.description
        }
    }

    renderTable() {
        return this.state.data.map(species => 
            // data row
            <tr key={species.animalId}>
                <td>{species.animalId}</td>
                <td>{species.scientificName}</td>
                <td>{species.genus}</td>
                <td>{species.family}</td>
                <td>{species.order}</td>
                <td>{species.class}</td>
                <td>{species.phylum}</td>
                <td>{species.cause}</td>
                <td>{species.photoUrl}</td>
                <td>{species.lastUpdate}</td>
            </tr>
        );
    }
}