import React, {Component} from 'react';
import Firebase from 'firebase';
import {Auth} from '../config/firebase';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(`sessionStorage: ${sessionStorage.getItem('uid')}`);
  }

  componentWillMount() {
    Auth.onAuthStateChanged(user => {
      if(user) sessionStorage.setItem('uid', user.uid);
      console.log(`Auth State changed to authenticated for ${user.displayName}`);
    });
    // Auth.getRedirectResult().then(result => console.log(result.user));
  }

  fbLogin() {
    let provider = new Firebase.auth.FacebookAuthProvider();
    Auth.signInWithRedirect(provider);
  }

  render() {
    return(
      <section>
        <h1>Log in om verder te gaan</h1>
        <button onClick={this.fbLogin}>Sign in with Facebook</button>
      </section>
    );
  }
}
