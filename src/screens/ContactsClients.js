import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';
import MenuTools from '../components/MenuTools/MenuTools.js';
import BlocContact from '../components/BlocContact/BlocContact.js';

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
          <div className="infosContactClient"></div>
        <div className="marginTop107">
          <BlocContact />
          <BlocContact />
        </div>
        <Navigation />
        <MenuTools page="contact" />
      </div>
    );
  }
}

export default Contacts;