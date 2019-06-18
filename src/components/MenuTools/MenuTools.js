import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import './menuTools.scss';

class MenuTools extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listToday: true,
      listTomorrow: false
    };

    this.activeToday = this.activeToday.bind(this);
    this.activeTomorrow = this.activeTomorrow.bind(this);
  }

  activeToday() {
    this.setState(prevState => ({
      listToday: true,
      listTomorrow: false
    }));
  }
  activeTomorrow() {
    this.setState(prevState => ({
      listToday: false,
      listTomorrow: true
    }));
  }

  render() {
    return (
        <div className="menuTools">
          <SideBar />
          <div className="switch">
            <button onClick={this.activeToday} className={this.state.listToday ? 'selected' : ''}>AUJOURD'HUI</button>
            <button onClick={this.activeTomorrow} className={this.state.listTomorrow ? 'selected' : ''}>DEMAIN</button>
          </div>
        </div>
    );
  }
}

export default MenuTools;