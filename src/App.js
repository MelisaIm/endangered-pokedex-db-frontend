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

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [
        {animalId: 1, scientificName: "Bubalus quarlesi", genus: "Bubalus", family: "Bovidae", order: "Artiodactyla", class: "Mammalia", phylum: "Chordata", cause: "hunting", photoUrl: "https://blog.nationalgeographic.org/wp-content/uploads/2018/02/Anoa-cropped-720x502.jpg", lastUpdate: "2021-04-26"},
        {animalId: 2, scientificName: "Platanista gangetica", genus: "Platanista", family: "Platanistidae", order: "Artiodactyla", class: "Mammalia", phylum: "Chordata", cause: "habitat disruption", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Platanista_gangetica_noaa.jpg/1920px-Platanista_gangetica_noaa.jpg", lastUpdate: "2021-04-26"},
        {animalId: 3, scientificName: "Leopardus jacobita", genus: "Leopardus", family: "Felidae", order: "Carnivora", class: "Mammalia", phylum: "Chordata", cause: "habitat loss", photoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Andean_cat_1_Jim_Sanderson.jpg/1024px-Andean_cat_1_Jim_Sanderson.jpg", lastUpdate: "2021-04-26"},
        {animalId: 4, scientificName: "Chinchilla lanigera", genus: "Chinchilla", family: "Chinchillidae", order: "Rodentia", class: "Mammalia", phylum: "Chordata", cause: "hunting", photoUrl: "https://www.globalwildlife.org/wp-content/uploads/2020/06/M121_001_001-03.jpeg", lastUpdate: "2021-04-26"}
    ],
      nonprofits: [
        {nonprofitId: 1, nonprofitName: "Alianza Gato Andino", nonprofitWebsite: "https://gatoandino.org/en/home/"},
        {nonprofitId: 2, nonprofitName: "World Wild Life", nonprofitWebsite: "https://www.worldwildlife.org/"},
        {nonprofitId: 3, nonprofitName: "Whale and Dolphin Conservation", nonprofitWebsite: "https://us.whales.org/"},
        {nonprofitId: 4, nonprofitName: "Save the Wild Chinchillas", nonprofitWebsite: "https://www.savethewildchinchillas.org/"}
      ]
    }
  }
  render(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/species">Species Table</Link>
            </li>
            <li>
              <Link to="/endangered-nonprofits">Endangered Species + Nonprofits Table</Link>
            </li>
            <li>
              <Link to="/nonprofits">Nonprofits Table</Link>
            </li>
            <li>
              <Link to="/habitats">Habitats Table</Link>
            </li>            
            <li>
              <Link to="/endangered-habitats">Endangered Species + Habitats Table</Link>
            </li>
            <li>
              <Link to="/endangered-captivity-places">Endangered Species + Captivity Places Table</Link>
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
          <Route path="/endangered-captivity-places">
            <EndangeredCaptivityPlaces />
          </Route>
          <Route path="/endangered-habitats">
            <EndangeredHabitats />
          </Route>
          <Route path="/number-left">
            <NumberLeft />
          </Route>
          <Route path="/captivity-places">
              <CaptivityPlaces />
            </Route>
          <Route path="/habitats">
              <Habitats />
            </Route>
          <Route path="/nonprofits">
            <Nonprofits data={this.state.nonprofits} title="Nonprofits" description="This table is about nonprofits that work to preserve and revitalize fauna"/>
          </Route>
          <Route path="/species">
            <Species data={this.state.animals} title="Endangered Species" description="This table is about endangered species"/>
          </Route>
          <Route path="/endangered-nonprofits">
            <EndangeredNonprofits />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}

function Home() {
  return <h2>Home</h2>;
}

function EndangeredCaptivityPlaces() {
  return <h2>Endangered Captivity Places</h2>;
}

function EndangeredNonprofits() {
  return <h2>Endangered Nonprofits</h2>;
}

function EndangeredHabitats() {
  return <h2>Endangered Habitats</h2>;
}

function NumberLeft() {
  return <h2>Number Left</h2>;
}

function CaptivityPlaces() {
  return <h2>Captivity Places</h2>;
}

function Habitats() {
  return <h2>Habitats</h2>;
}

