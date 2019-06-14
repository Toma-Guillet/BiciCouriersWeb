import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation.js';
import MenuTools from '../components/MenuTools/MenuTools.js';

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <MenuTools />
        contacts
        <Navigation />
      </div>
    );
  }
}

export default Contacts;