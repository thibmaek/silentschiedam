import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import {Home, Login} from '../pages/';

import {Auth} from '../config/firebase';

const uid = sessionStorage.getItem('uid');

const isLoggedIn = (nextState, replace) => {
  if(!uid) replace({pathname: '/login'});
  console.log(`The user is logged in with ${uid}`);
};

const logout = (nextState, replace) => {
  Auth.signOut()
    .then(() => replace({pathname: '/login'}))
    .catch(err => console.log(err));
};

export default (
  <Router history={browserHistory}>
    <Route path='/' component={Home} onEnter={isLoggedIn} />
    <Route path='/login' component={Login} />
    <Route path='/logout' onEnter={logout} />
  </Router>
);
