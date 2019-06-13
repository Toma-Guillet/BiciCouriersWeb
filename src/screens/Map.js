import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation.js';
import MenuTools from '../components/MenuTools/menuTools.js';

class Map extends Component {
  render() {
    return (
      <div className="map">
        <MenuTools />
          map
        <MenuNavigation />
      </div>
    );
  }
}

export default Map;