import React, { Component } from 'react';
import Navigation from '../components/MenuNavigation/MenuNavigation';
import MenuTools from '../components/MenuTools/MenuTools.js';
import { Redirect } from 'react-router-dom'

class Order extends Component {
  render() {
    if (!this.props.location.order) {
        return <Redirect to='/' />
    }
    return (
      <div className="map">
        <MenuTools />
          order {this.props.location.order.content}
        <Navigation />
      </div>
    );
  }
}

export default Order;