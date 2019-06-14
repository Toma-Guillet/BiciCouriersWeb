import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './menuNavigation.scss';

class MenuNavigation extends Component {
  render() {
    return (
      <div className="menu">
        <div className="link">
            <Link to="/">
                <button type="button">
                    Commandes
                </button>
            </Link>
        </div>
        <div className="link">
            <Link to="/map">
                <button type="button">
                    Map
                </button>
            </Link>
        </div>
        <div className="link">
            <Link to="/contacts">
                <button type="button">
                    Contact
                </button>
            </Link>
        </div>
        <div className="link">
            <Link to="/new">
                <button type="button">
                    Ajouter une course
                </button>
            </Link>
        </div>
      </div>
    );
  }
}

export default MenuNavigation;