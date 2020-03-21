import React, { useEffect, useState } from 'react';
import CassieAxios from 'axios';
import { Tile } from 'carbon-components-react';
import logo from './logo.svg';
import './App.scss';
import 'carbon-components/css/carbon-components.min.css';

function App() {
const [rockets, setRockets] = useState([]);

  useEffect(() => {
    getAllRockets()
  }, []);

const getAllRockets = () => {
const rocketURL = 'https://api.spacexdata.com/v3/rockets'
CassieAxios.get(rocketURL).then(response => {
  setRockets(response.data)
})
}

  return <>
  {rockets.map(rocket => {
    console.log({ rocket })
    return <Tile>
      Company: {rocket.company}
      Country: {rocket.country}
      <img src={rocket.flickr_images[0]} alt="rocket" />
    </Tile>
  })}
  </>
}

export default App;
