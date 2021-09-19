import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../views/Home';
// import Navbar from '../components/Navbar';

function Router(props) {
  return (
    <Switch>
      <Route exact path='/'>
        
        <Home/>
      </Route>
    </Switch>
  );
}

export default Router;