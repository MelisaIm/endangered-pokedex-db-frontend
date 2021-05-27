import React from 'react';
import Table from '../TableBase';

export default class Nonprofits extends Table {

    onClickAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        var object = {};
        formData.forEach((value, key) => object[key] = value);

        axios.post(`${endpoint}insert/nonprofits`, object).then(((res) => window.location.reload())).catch(() => {
            alert('Insert to endangered species table failed');
        });
    }

    renderForm() {
        const inputs = ['nonprofitName', 'nonprofitWebsite'];
        return (<form onSubmit={(e) => this.onClickAdd(e)} className="createForm">
                    {inputs.map((key, index) => <div key={`div-${index}-${key}`} className="formItem">
                            <label key={`label-${index}-${key}`}>{key}</label><br/>
                            <input required key={`input-${index}-${key}`} type="text" id={key} name={key}/><br/><br/>
                    </div>)}
            <input type="submit" value="Add Row"/>
        </form>) 
    }

    renderTable() {
        return this.props.data.map(nonprofit => 
            // data row
            <tr key={nonprofit.nonprofitId}>
                <td>{nonprofit.nonprofitId}</td>
                <td>{nonprofit.nonprofitName}</td>
                <td>{nonprofit.nonprofitWebsite}</td>
                <td><button onClick={this.onClickUpdate}>Save Changes</button><button onClick={this.onClickDelete}>Delete</button></td>
            </tr>
        );
    }
}