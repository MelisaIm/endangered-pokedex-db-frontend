import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Species from './pages/Species';
import Nonprofits from './pages/Nonprofits';
import Habitats from './pages/Habitats';
import CaptivityPlaces from './pages/CaptivityPlaces';
import NumberLeft from './pages/NumberLeft';
import EndangeredHabitats from './pages/EndangeredHabitats';
import EndangeredNonprofits from './pages/EndangeredNonprofits';
import axios from 'axios';

// export const endpoint = process.env.NODE_ENV === "development" ? 'http://localhost:60500/' : 'http://flip1.engr.oregonstate.edu:60500/';
export const endpoint = 'http://flip1.engr.oregonstate.edu:60500/';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      endangeredSpecies: [
        {animalId: 1, scientificName: "Bubalus quarlesi", commonName: "mountain anoa", genus: "Bubalus", family: "Bovidae", kingdomOrder: "Artiodactyla", class: "Mammalia", phylum: "Chordata", cause: "hunting", photoUrl: "https://blog.nationalgeographic.org/wp-content/uploads/2018/02/Anoa-cropped-720x502.jpg", lastUpdate: "2021-04-26", captivityPlaceId: "NULL", zooName: "NULL"},
      ],
      nonprofits: [
        {nonprofitId: 1, nonprofitName: "Alianza Gato Andino", nonprofitWebsite: "https://gatoandino.org/en/home/"},
      ],
      nativeHabitats: [
        {habitatId: 1, continent: "South America", country: "Chile", biome: "alpine tundra", nativeHabitatCoordinates: "32°S 70°W "},
      ],
      captivityPlaces: [
        {zooId: 1, zooName: "Smithsonian's National Zoo", zooState: "Washington D.C.", zooCountry: "United States of America", zooCoordinates: "38.9296°N 77.0498°W"}
      ],
      numberLeft: [
        {numberLeftId: 1, animalId: 1, inCaptivity: 0, inWild: 2500, decade: 2010, conservationStatus: "endangered"},
      ],
      endangeredHabitats: [
        {animalId: 1, habitatId: 2},
      ],
      endangeredNonprofits: [
        {animalId: 3, nonprofitId: 1},
      ]
    }

    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

// add hook to fetch new data on inserts

  componentDidMount() {
    const tables1 = ['endangeredSpecies', 'captivityPlaces', 'nativeHabitats', 'nonprofits'];
    
    tables1.forEach((table) => {
      axios.get(`${endpoint}select/${table}`).then((res) => {
        if (res.status === 200) {
          this.setState({[table]: res.data});
        }
      }).catch(console.error);
    });

    const tables2 = [{table1: 'endangeredHabitats', table2: 'nativeHabitats', commonKey: 'habitatId'}, {table1: 'endangeredNonprofits', table2: 'nonprofits', commonKey: 'nonprofitId'}];
    tables2.forEach((table) => {
      axios.get(`${endpoint}select/${table.table1}/${table.table2}/${table.commonKey}`).then((res) => {
        if (res.status === 200) {
          this.setState({[table.table1]: res.data});
        }
      }).catch(console.error);
    });

    axios.get(`${endpoint}select/numberLeft`).then((res) => {
      if (res.status === 200) {
        this.setState({numberLeft: res.data});
      }
    })
  }

  update(table, object) {
    axios.put(`${endpoint}update/${table}`, object).then(((res) => {console.log(res); window.location.reload()})).catch(() => {
      alert(`Update to ${table} table failed`);
  });
  }

  delete(table, object) {
    axios.delete(`${endpoint}delete/${table}`, object).then(((res) => {console.log(res); window.location.reload()})).catch(() => {
        alert(`Delete to ${table} table failed`);
    });
  }

  render(){
    return (
      <Router>
        <div>
          <h1 style={{display: "flex", justifyContent: "center"}}>Endangered Pokedex - Bill's PC</h1>
          <h4>Test on OSU VPN and in Chrome Browser</h4>
          <nav>
            <ul id="menu">
              <li>
                <Link to="/species">Species Table</Link>
              </li>
              <li>
                <Link to="/nonprofits">Nonprofits Table</Link>
              </li>
              <li>
                <Link to="/endangered-nonprofits">Endangered Species + Nonprofits</Link>
              </li>
              <li>
                <Link to="/habitats">Habitats Table</Link>
              </li>            
              <li>
                <Link to="/endangered-habitats">Endangered Species + Habitats </Link>
              </li>
              <li>
                <Link to="/captivity-places">Captivity Places Table</Link>
              </li>
              <li>
                <Link to="/number-left">Number Left Table</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/endangered-habitats">
              <EndangeredHabitats data={this.state.endangeredHabitats} endangeredSpecies={this.state.endangeredSpecies} nativeHabitats={this.state.nativeHabitats} title="Endangered Species + Native Habitats" description="Inner join table for endangered species and where they naturally reside" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
            </Route>
            <Route path="/number-left">
              <NumberLeft data={this.state.numberLeft} endangeredSpecies={this.state.endangeredSpecies} title="Number Left by Decade" description="This table shows how many per species remain per decade" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
            </Route>
            <Route path="/captivity-places">
                <CaptivityPlaces data={this.state.captivityPlaces} title="Captivity Places" description="This table is about places where these species live in captivity" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
              </Route>
            <Route path="/habitats">
                <Habitats data={this.state.nativeHabitats} title="Habitats" description="This table is about habitats where these species naturally reside" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
              </Route>
            <Route path="/nonprofits">
              <Nonprofits data={this.state.nonprofits} title="Nonprofits" description="This table is about nonprofits that work to preserve and revitalize fauna" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
            </Route>
            <Route path="/endangered-nonprofits">
              <EndangeredNonprofits data={this.state.endangeredNonprofits} endangeredSpecies={this.state.endangeredSpecies} nonprofits={this.state.nonprofits} title="Endangered Species + Nonprofits" description="Inner join table for endangered species and the nonprofits working to protect and preserve them" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
            </Route>
            <Route path={["/","/species"]}>
              <Species data={this.state.endangeredSpecies} captivityPlaces={this.state.captivityPlaces} title="Endangered Species" description="This table is about endangered species" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}




