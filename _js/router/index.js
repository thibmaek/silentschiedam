import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Home, Login} from '../pages/';

import {Auth} from '../config/firebase';

const isLoggedIn = (nextState, replace) => {
  if(!Auth.currentuser) replace({pathname: '/login'});
};

const logout = (nextState, replace) => {
  Auth.signOut()
    .then(() => replace({pathname: '/login'}))
    .catch(err => console.log(err));
};

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home} />
    <Route path='/login' component={Login} />
    <Route path='/logout' onEnter={logout} />
  </Router>
);
