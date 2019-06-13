import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation.js';
import MenuTools from '../components/MenuTools/menuTools.js';
import DndList from '../components/dndList/dndList.js';

import '../styles/common.scss';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <DndList />
        <MenuNavigation />
        <MenuTools />
      </div>
    );
  }
}

export default Home;