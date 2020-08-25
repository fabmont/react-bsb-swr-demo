import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './pages/List';
import Details from './pages/Details';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={List} />
        <Route path="/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
