import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/Home';
import modalCheckOut from '../components/ModalCheckout/index'
import Notfound from '../components/404/index'
import Profile from '../pages/Profile';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

export default function App() {

  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/cadastro" component={Signup} />

      <Route path="/home" exact component={Home} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/modalCheckOut" component={modalCheckOut} />
      <Route path="/*" component={Notfound} />
    </Switch>
  );
 
}
