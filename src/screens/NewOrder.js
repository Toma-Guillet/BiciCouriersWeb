import React, { Component } from 'react';
import Navigation from '../components/Navigation/Navigation';
import MenuTools from '../components/MenuTools/MenuTools';

import '../styles/common.scss';

class NewOrder extends Component {
  render() {
    return (
      <div className="home">
        <Navigation />
        <MenuTools />
      </div>
    );
  }
}

export default NewOrder;