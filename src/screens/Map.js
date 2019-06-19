import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation.js';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import googleMaps from '../configs/googleMaps';

const MapComponent = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${googleMaps.apiKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="mapComponent" />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
);

class Map extends Component {

  state = {
    mode: 'couriers',
    isMarkerShown: false,
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

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  };

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker()
  };

  render() {
    console.log(this.state.mode);
    return (
      <div className="mapScreen">
        <header>
          <button onClick={() => this.changeMode('couriers')} className={`${this.state.mode = 'couriers' ? 'buttonActive' : 'buttonInactive'} pointer`}>Coursiers</button>
          <button onClick={() => this.changeMode('livraisons')} className={`${this.state.mode = 'livraisons' ? 'buttonActive' : 'buttonInactive'} pointer`}>Livraisons</button>
        </header>
        <MapComponent
          isMarkerShown={this.state.isMarkerShown}
          onMarkerClick={this.handleMarkerClick}
        />
        <Navigation />
      </div>
    );
  }
}

export default Map;