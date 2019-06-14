import React, { Component } from 'react';
import MenuNavigation from '../components/menuNavigation/MenuNavigation';
import MenuTools from '../components/menuTools/MenuTools';
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
        <MenuNavigation />
      </div>
    );
  }
}

export default Order;