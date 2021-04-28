import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Species from './pages/Species';

function App() {
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
            <Nonprofits />
          </Route>
          <Route path="/species">
            <Species data={[{animalId: 1, scientificName: "Pikachu", genus: "pikachuFam", family: "alsoPichu", order: "", class: "", phylum: "", cause:"", photoUrl: "", lastUpdate: ""}]} title="Endangered Species" description="This table is about endangered species"/>
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

function Home() {
  return <h2>Home</h2>;
}

function Nonprofits() {
  return <h2>Nonprofits</h2>;
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

export default App;
