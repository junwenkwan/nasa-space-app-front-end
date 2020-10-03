import React from "react";

import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

//sidebar.js
import Sidebar from './Sidebar';

import Home from './Home';
import Education from './Education';
import Charity from './Charity';

export default function App({props}) {
  return (
    <BrowserRouter>
      <Sidebar/>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/education' component={Education}/>
        <Route path='/charity' component={Charity}/>
      </Switch>
    </BrowserRouter>
  );
}