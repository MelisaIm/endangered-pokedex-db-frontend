import React from 'react';
import Table from '../TableBase';

export default class CaptivityPlaces extends Table {

    renderTable() {
        return this.state.data.map(place => 
            // data row
            <tr key={place.zooId}>
                <td>{place.zooId}</td>
                <td>{place.zooName}</td>
                <td>{place.zooState}</td>
                <td>{place.zooCountry}</td>
                <td>{place.zooCoordinates}</td>
                <td><button>Edit</button><button>Delete</button></td>
            </tr>
        );
    }
}