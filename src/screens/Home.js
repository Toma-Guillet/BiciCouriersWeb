import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';
import MenuTools from '../components/MenuTools/MenuTools.js';
import List from '../components/List/List.js';
import '../styles/common.scss';

class Home extends Component {
  render() {
    return (
      <main className="home">
        <List />
        <Navigation page="home" />
        <MenuTools />
      </main>
    );
  }
}

export default Home;