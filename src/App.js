import React from "react";

import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import Home from './Home';

export default function App({props}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
      </Switch>
    </BrowserRouter>
  );
}