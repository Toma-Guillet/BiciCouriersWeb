import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation';
import MenuTools from '../components/menuTools/MenuTools';

import '../styles/common.scss';

class NewOrder extends Component {
  render() {
    return (
      <div className="home">
        <MenuNavigation />
        <MenuTools />
      </div>
    );
  }
}

export default NewOrder;