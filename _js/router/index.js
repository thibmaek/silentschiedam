import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {App, Home, Login, Detail, Info} from '../pages/';

import {Auth} from '../config/firebase';

const logout = (nextState, replace, cb) => {
  Auth.signOut()
    .then(() => {
      replace({pathname: '/login'});
      cb();
    })
    .catch(err => console.log('err', err));
};

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/home' />
      <Route path='/home' component={Home} />
      <Route path='/info' component={Info} />
      <Route path='/detail/:id' component={Detail} />
      <Route path='/login' component={Login}  />
      <Route path='/logout' onEnter={logout} />
    </Route>
  </Router>
);
