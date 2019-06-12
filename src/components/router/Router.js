import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../../screens/home/Home';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;