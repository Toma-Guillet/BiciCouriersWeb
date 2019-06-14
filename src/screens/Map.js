import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation.js';
import MenuTools from '../components/MenuTools/menuTools.js';

class Map extends Component {
  render() {
    return (
      <div className="map">
        <MenuTools />
          map
        <Navigation />
      </div>
    );
  }
}

export default Map;