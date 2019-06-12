import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation.js';

import '../styles/common.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        Liste des commandes
        <MenuNavigation />
      </div>
    );
  }
}

export default Home;