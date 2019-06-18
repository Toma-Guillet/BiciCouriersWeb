import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation.js';
import MenuTools from '../components/MenuTools/MenuTools.js';
import List from '../components/List/List.js';

class Home extends Component {
  render() {
    return (
      <main className="home">
        <List />
        <Navigation />
        <MenuTools />
      </main>
    );
  }
}

export default Home;