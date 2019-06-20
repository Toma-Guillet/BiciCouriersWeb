import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';
import MenuTools from '../components/MenuTools/MenuTools';

import '../styles/common.scss';

class NewOrder extends Component {
  render() {
    return (
      <div className="new">
        <MenuTools />
        <header>
          <ul>
            <li>
              <p className="upper center">Client</p>
              <p className="center">1</p>
            </li>
            <li>
              <p className="upper center">Horaires</p>
              <p className="center">2</p>
            </li>
            <li>
              <p className="upper center">Adresses</p>
              <p className="center">3</p>
            </li>
          </ul>
        </header>
        <main>
          <form>
            <h2>Type</h2>
            <div className="type">
              <div className="checkbox pointer">
                <input type="checkbox" id="scales" name="scales"/>
                <label className="pointer" for="scales">Professionel</label>
              </div>
              <div className="checkbox pointer">
                <input type="checkbox" id="scales" name="scales"/>
                <label className="pointer" for="scales">Particulier</label>
              </div>
            </div>
            <h2>Identité client</h2>
            <div className="identity">
              <input type="text" placeholder="Nom du client"/>
              <label>Cette société est un nouveau client et va être ajoutée à la base de donnée</label>
            </div>
            <input type="submit" value="SUIVANT"/>
            <input type="cancel" value="ANNULER" className="pointer center"/>
          </form>
        </main>
        <Navigation />
      </div>
    );
  }
}

export default NewOrder;