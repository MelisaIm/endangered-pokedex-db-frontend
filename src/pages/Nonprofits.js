import React from 'react';
import Table from '../TableBase';

export default class Nonprofits extends Table {

    renderTable() {
        return this.state.data.map(nonprofit => 
            // data row
            <tr key={nonprofit.nonprofitId}>
                <td>{nonprofit.nonprofitId}</td>
                <td>{nonprofit.nonprofitName}</td>
                <td>{nonprofit.nonprofitWebsite}</td>
                <td><button>Edit</button><button>Delete</button></td>
            </tr>
        );
    }
}