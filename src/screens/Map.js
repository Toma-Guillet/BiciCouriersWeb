import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';

class Map extends Component {

  state = {
    mode: 'couriers'
  };

  changeMode = value => {
    switch (value) {
      case 'couriers':
        this.setState({mode: 'couriers'});
        break;
      case 'livraisons':
        this.setState({mode: 'livraisons'});
        break;
      default:
        return;
    }
  };

  render() {
    console.log(this.state.mode);
    return (
      <div className="mapScreen">
        <header>
          <button onClick={() => this.changeMode('couriers')} className={`${this.state.mode = 'couriers' ? 'buttonActive' : 'buttonInactive'} pointer`}>Coursiers</button>
          <button onClick={() => this.changeMode('livraisons')} className={`${this.state.mode = 'livraisons' ? 'buttonActive' : 'buttonInactive'} pointer`}>Livraisons</button>
        </header>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43362.70604045212!2d-1.6055301208984372!3d47.21327295000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1560762539142!5m2!1sfr!2sfr"
          frameBorder="0" className="map" style={{border:0}} allowFullScreen/>
        <Navigation />
      </div>
    );
  }
}

export default Map;