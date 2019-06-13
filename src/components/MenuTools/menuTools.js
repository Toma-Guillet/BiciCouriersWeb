import React, { Component } from 'react';
import SideBar from '../SideBar/sideBar';
import './menuTools.scss';

class MenuTools extends Component {
  render() {
    return (
        <div className="menuTools">
          <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />

        </div>
    );
  }
}

export default MenuTools;