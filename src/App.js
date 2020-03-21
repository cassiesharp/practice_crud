import React, { useEffect, useState } from 'react';
import CassieAxios from 'axios';
import { ClickableTile } from 'carbon-components-react';
import Header from './components/header/Header';
import './App.css';
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

  return <div className="rocketContainer">
    <Header />
    <div className="rocketRowContainer">
      {rockets.map(rocket => {
        console.log({ rocket })
        return (
          <ClickableTile href={rocket.wikipedia} target="_blank">
            <div className="rocketContentContainer">
              <h4>{rocket.company}</h4>
              <h4>{rocket.country}</h4>
            </div>
            <div>
              <img src={rocket.flickr_images[0]} className="rocketImages" alt="rocket" />
            </div>
          </ClickableTile>
        )
      })}
    </div>
  </div>
}

export default App;
