import React, { Component } from 'react';
import SideBar from '../Sidebar/Sidebar';
import './menuTools.scss';

class MenuTools extends Component {
  render() {
    if(false){
      return (
        <div className="menuTools">
          <div className="title">Ajout d'une course</div>
          <SideBar />
        </div>
      )
    }
    return (
        <div className="menuTools">
          <SideBar />
          <div className="switch">
            <button className="selected">AUJOURD'HUI</button>
            <button>DEMAIN</button>
          </div>
        </div>
    );
  }
}

export default MenuTools;