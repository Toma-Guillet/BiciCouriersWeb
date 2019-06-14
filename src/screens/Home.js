import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation';
import MenuTools from '../components/menuTools/MenuTools';
import DndList from '../components/dndList/DndList';

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