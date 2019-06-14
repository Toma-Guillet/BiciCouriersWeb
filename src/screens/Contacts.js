import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation';
import MenuTools from '../components/menuTools/MenuTools';

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