import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from '../../screens/home/Home';

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={Home} />
      </Switch>
    </HashRouter>
  )
};

export default Router;