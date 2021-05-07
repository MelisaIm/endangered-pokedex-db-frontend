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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [
        {animalId: 1, scientificName: "Bubalus quarlesi", commonName: "mountain anoa", genus: "Bubalus", family: "Bovidae", order: "Artiodactyla", class: "Mammalia", phylum: "Chordata", cause: "hunting", photoUrl: "https://blog.nationalgeographic.org/wp-content/uploads/2018/02/Anoa-cropped-720x502.jpg", lastUpdate: "2021-04-26", captivityPlaceId: "NULL"},
        {animalId: 2, scientificName: "Platanista gangetica", commonName: "South Asian river dolphin", genus: "Platanista", family: "Platanistidae", order: "Artiodactyla", class: "Mammalia", phylum: "Chordata", cause: "habitat disruption", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Platanista_gangetica_noaa.jpg/1920px-Platanista_gangetica_noaa.jpg", lastUpdate: "2021-04-26", captivityPlaceId: "NULL"},
        {animalId: 3, scientificName: "Leopardus jacobita", commonName: "Andrean mountain cat", genus: "Leopardus", family: "Felidae", order: "Carnivora", class: "Mammalia", phylum: "Chordata", cause: "habitat loss", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Andean_cat_1_Jim_Sanderson.jpg/1024px-Andean_cat_1_Jim_Sanderson.jpg", lastUpdate: "2021-04-26", captivityPlaceId: "NULL"},
        {animalId: 4, scientificName: "Chinchilla lanigera", commonName: "long-tailed chinchilla", genus: "Chinchilla", family: "Chinchillidae", order: "Rodentia", class: "Mammalia", phylum: "Chordata", cause: "hunting", photoUrl: "https://www.globalwildlife.org/wp-content/uploads/2020/06/M121_001_001-03.jpeg", lastUpdate: "2021-04-26", captivityPlaceId: 1}
      ],
      nonprofits: [
        {nonprofitId: 1, nonprofitName: "Alianza Gato Andino", nonprofitWebsite: "https://gatoandino.org/en/home/"},
        {nonprofitId: 2, nonprofitName: "World Wild Life", nonprofitWebsite: "https://www.worldwildlife.org/"},
        {nonprofitId: 3, nonprofitName: "Whale and Dolphin Conservation", nonprofitWebsite: "https://us.whales.org/"},
        {nonprofitId: 4, nonprofitName: "Save the Wild Chinchillas", nonprofitWebsite: "https://www.savethewildchinchillas.org/"}
      ],
      nativeHabitats: [
        {habitatId: 1, continent: "South America", country: "Chile", biome: "alpine tundra", nativeHabitatCoordinates: "32°S 70°W "},
        {habitatId: 2, continent: "Asia", country: "Indonesia", biome: "rainforest", nativeHabitatCoordinates: "02°S 121°E"},
        {habitatId: 3, continent: "Asia", country: "India", biome: "freshwater", nativeHabitatCoordinates: "25.30°N 83.01°E"}
      ],
      captivityPlaces: [
        {zooId: 1, zooName: "Smithsonian's National Zoo", zooState: "Washington D.C.", zooCountry: "United States of America", zooCoordinates: "38.9296°N 77.0498°W"}
      ],
      numberLeft: [
        {numberLeftId: 1, animalId: 1, inCaptivity: 0, inWild: 2500, decade: 2010, conservationStatus: "endangered"},
        {numberLeftId: 2, animalId: 2, inCaptivity: 0, inWild: 5000, decade: 2010, conservationStatus: "endangered"},
        {numberLeftId: 3, animalId: 3, inCaptivity: 0, inWild: 1378, decade: 2010, conservationStatus: "endangered"},
        {numberLeftId: 4, animalId: 4, inCaptivity: 0, inWild: 5350, decade: 2010, conservationStatus: "endangered"},
        {numberLeftId: 5, animalId: 1, inCaptivity: 0, inWild: 2500, decade: 2000, conservationStatus: "endangered"}
      ],
      endangeredHabitats: [
        {animalId: 1, habitatId: 2},
        {animalId: 2, habitatId: 3},
        {animalId: 3, habitatId: 1},
        {animalId: 4, habitatId: 1}
      ],
      endangeredNonprofits: [
        {animalId: 3, nonprofitId: 1},
        {animalId: 2, nonprofitId: 3},
        {animalId: 4, nonprofitId: 4},
        {animalId: 1, nonprofitId: 2},
        {animalId: 2, nonprofitId: 2},
        {animalId: 3, nonprofitId: 2},
        {animalId: 4, nonprofitId: 2}
      ]
    }

    this.delete = this.delete.bind(this);
  }

  update(table, property, newValue) {
    console.log(table);
  }

  create(table, object) {
    console.log(table);
  }

  delete(table, data) {
    const dataArr = this.state[table];
    let idOne = 'animalId', idTwo;
    switch (table) {
      case 'endangeredNonprofits':
        idOne = 'animalId';
        idTwo = 'nonprofitId';
        break;
      case 'endangeredHabitats':
        idOne = 'animalId';
        idTwo = 'habitatId';
        break;
      case 'nonprofits':
        idOne = 'nonprofitId';
        break;
      case 'habitats':
        idOne = 'habitatId';
        break;
      case 'captivityPlaces':
        idOne = 'zooId';
        break;
      case 'numberLeft':
        idOne = 'numberLeftId';
        break;
    }
    if (idTwo) {
      const newArr = dataArr.map((obj) => {
        if (obj[idOne] !== data[idOne] || obj[idTwo] !== data[idTwo]) {
          return obj; 
        }
      })
    }

    const newArr = dataArr.map((obj) => {
      if (obj[idOne] !== data[idOne]) {
        return obj;
      }
    }).filter((el) => el !== undefined);
    this.setState({[table]: newArr});
  }

  render(){
    return (
      <Router>
        <div>
          <h1 style={{display: "flex", justifyContent: "center"}}>Endangered Pokedex - Bill's PC</h1>
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
              <EndangeredHabitats data={this.state.endangeredHabitats} title="Endangered Species + Native Habitats" description="Inner join table for endangered species and where they naturally reside" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
            </Route>
            <Route path="/number-left">
              <NumberLeft data={this.state.numberLeft} title="Number Left by Decade" description="This table shows how many per species remain per decade" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
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
              <EndangeredNonprofits data={this.state.endangeredNonprofits} title="Endangered Species + Nonprofits" description="Inner join table for endangered species and the nonprofits working to protect and preserve them" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
            </Route>
            <Route path={["/","/species"]}>
              <Species data={this.state.animals} title="Endangered Species" description="This table is about endangered species" onCreate={this.create} onDelete={this.delete} onUpdate={this.update}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}




