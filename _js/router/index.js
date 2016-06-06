import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {App, Home, Login, Detail} from '../pages/';

import {Auth} from '../config/firebase';
const uid = sessionStorage.getItem('uid');

const isLoggedIn = (nextState, replace) => {
  if(!uid) replace({pathname: '/login'});
  console.log(`The user is logged in with ${uid}`);
};

const logout = (nextState, replace) => {
  Auth.signOut()
    .then(() => {
      sessionStorage.removeItem('uid');
      window.location = `http://${window.location.hostname}:${window.location.port}/login`;
      // replace({pathname: '/login'});
    })
    .catch(err => console.log(err));
};

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/home' />
      <Route path='/home' component={Home} onEnter={isLoggedIn} />
      <Route path='/detail/:id' component={Detail} />
      <Route path='/login' component={Login}  />
      <Route path='/logout' onEnter={logout} />
    </Route>
  </Router>
);
