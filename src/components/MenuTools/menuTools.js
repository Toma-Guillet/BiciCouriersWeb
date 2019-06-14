import React, { Component } from 'react';
import SideBar from '../sidebar/Sidebar';
import './menuTools.scss';

class MenuTools extends Component {
  render() {
    return (
        <div className="menuTools">
          <div className="title">Ajout d'une course</div>
          <SideBar />
        </div>
    );
  }
}

export default MenuTools;