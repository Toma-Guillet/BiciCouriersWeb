import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';
import MenuTools from '../components/MenuTools/MenuTools.js';
import { Link } from "react-router-dom";

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <MenuTools />
          <div
              className="containerBox"
          >
              <div className="header">EN COURS DE LIVRAISON</div>
              <div className="content">
                  <div className="infos">
                      <div className="line">
                          <div className="idDelivery karla">#50</div>
                      </div>
                      <div className="customerName karla">qsdqsd</div>
                      <div className="cardAddress">6 rue des lilas,<br />44000 Nantes</div>
                      <div className="line">
                          <div className="cardStatus">Urgent</div>
                          <div className="cardSchedule karla">09:00 > 12:00</div>
                      </div>
                  </div>

                  <Link
                      to={{
                          pathname: "/order",
                          order: this.props.task,
                      }}>
                      <button className="goTo" type="button">
                      </button>
                  </Link>
              </div>
          </div>
        <Navigation />
      </div>
    );
  }
}

export default Contacts;