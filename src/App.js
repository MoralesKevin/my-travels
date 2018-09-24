import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Travels.js';
import Travels from './Travels.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Travels
            photo = "https://res.cloudinary.com/dsql7dxni/image/upload/c_scale,w_613/v1537794175/h-montreal.jpg"
            destination = "Montréal"
            country = "Canada"
            distance = "5550 km"
          />
          <Travels
            photo = "https://photos.lci.fr/images/613/344/laponie-finlande-aurore-boreale-6d2a29-0@1x.jpeg"
            destination = "Laponie"
            country = "Finlande"
            distance = "3000 km"
          />       
      </div>
    );
  }
}

export default App;
