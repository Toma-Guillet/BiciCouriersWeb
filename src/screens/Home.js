import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation.js';
import DndList from '../components/dndList/dndList.js';

import '../styles/common.scss';

class Home extends Component {

  render() {
    return (
      <div className="home">
        <DndList />
        <MenuNavigation />
      </div>
    );
  }
}

export default Home;