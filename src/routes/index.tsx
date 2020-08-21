import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Room from '../pages/Room';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/room" component={Room} />
  </Switch>
);

export default Routes;
