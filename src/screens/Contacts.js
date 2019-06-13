import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation.js';
import MenuTools from '../components/MenuTools/menuTools.js';

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <MenuTools />
        contacts
        <MenuNavigation />
      </div>
    );
  }
}

export default Contacts;