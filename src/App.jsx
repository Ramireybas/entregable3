import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import "./App.css"
import Characters from "./components/Characters"


function App() {
  const [location, setLocation] = useState({});
  const [locationId, setLocationId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 125) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then(res => setLocation(res.data));
  }, []);

  const searchLocation = () => {

    axios.get(`https://rickandmortyapi.com/api/location/${locationId}/`)
      .then(res => setLocation(res.data))
  }

  console.log(location);

  return (
    <div className="App">
      <h1>LOCATION NAME :</h1>
      <h2>  {location.name}</h2>
      <div className="location-container">
        <ul className="location-list">
          <li >
            <p> TYPE: {location.type} </p>
            <p>DIMENSION: {location.dimension}</p>
            <p>POPULATION: {location.residents?.length}</p>
          </li>
        </ul>

      </div>
      <input
        type="text"
        value={locationId}
        onChange={e => setLocationId(e.target.value)}
      />
      <button onClick={searchLocation} >search</button>
      <h2>Characters</h2>
      <ul className="container">
        {location.residents?.map(resident => (
          <Characters
            url={resident}
            key={resident}
          />))}
      </ul>
    </div>
  );
}

export default App;
