import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div className="menu">
        <div className="link">
          <Link to="/">
            <button type="button" className="pointer">Commandes</button>
          </Link>
        </div>
        <div className="link">
          <Link to="/map">
            <button type="button" className="pointer">Map</button>
          </Link>
        </div>
        <div className="link">
          <Link to="/contacts">
            <button type="button" className="pointer">Contact</button>
          </Link>
        </div>
        <div className="link">
          <Link to="/">
            <button type="button" className="pointer">Ajouter une course</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navigation;