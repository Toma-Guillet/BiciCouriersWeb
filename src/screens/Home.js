import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation.js';
import MenuTools from '../components/MenuTools/menuTools.js';
import DndList from '../components/List/dndList.js';
import '../styles/common.scss';

class Home extends Component {
  render() {
    return (
      <main className="home">
        <DndList />
        <Navigation />
        <MenuTools />
      </main>
    );
  }
}

export default Home;