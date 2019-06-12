import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../screens/Home';
import Map from '../../screens/Map';
import Contacts from '../../screens/Contacts';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map" exact component={Map} />
        <Route path="/contacts" exact component={Contacts} />
        <Route path="*" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;