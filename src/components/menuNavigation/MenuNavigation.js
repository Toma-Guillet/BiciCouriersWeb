import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './menuNavigation.scss';

import imgParcel from '../../img/parcel.png';
import imgMap from '../../img/map.png';
import imgPhone from '../../img/phone.png';
import imgPlus from '../../img/plus.png';

class MenuNavigation extends Component {
  render() {
    return (
      <div className="menu">
        <div className="link">
            <Link to="/">
                <button type="button" className="selected">
                    <img src={imgParcel} alt="Logo" /><br />
                    <span>GESTION DES COURSES</span>
                </button>
            </Link>
        </div>
        <div className="link">
            <Link to="/map">
                <button type="button">
                    <img src={imgMap} alt="Logo" /><br />
                    <span>CARTE</span>
                </button>
            </Link>
        </div>
        <div className="link">
            <Link to="/contacts">
                <button type="button">
                    <img src={imgPhone} alt="Logo" /><br />
                    <span>CONTACTS</span>
                </button>
            </Link>
        </div>
        <div className="link">
            <Link to="/new">
                <button type="button">
                    <div className="roundBack"></div>
                    <div className="round">
                        <div className="content">
                            <img src={imgPlus} alt="Logo" /><br />
                            Ajouter une<br />course
                        </div>
                    </div>
                </button>
            </Link>
        </div>
      </div>
    );
  }
}

export default MenuNavigation;