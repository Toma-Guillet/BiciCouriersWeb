import React, { Component } from 'react';
import SideBar from '../sidebar/Sidebar';
import './menuTools.scss';

class MenuTools extends Component {
  render() {
    return (
        <div className="menuTools">
          <SideBar />
        </div>
    );
  }
}

export default MenuTools;