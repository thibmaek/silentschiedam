import React, {Component} from 'react';
import Firebase from 'firebase';
import {Auth} from '../config/firebase';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    Auth.onAuthStateChanged(user => {
      if(user) sessionStorage.setItem('uid', user.uid);
      console.log(`Auth State changed to authenticated for ${user.displayName} with uid: ${user.uid}`);
    });
  }

  fbLogin() {
    let provider = new Firebase.auth.FacebookAuthProvider();
    Auth.signInWithRedirect(provider);
  }

  render() {
    return(
      <section className='app-login-container'>
        <h2>Log in om verder te gaan</h2>
        <button className='login-button-facebook' onClick={this.fbLogin}>
        <i className='fa fa-facebook-official' aria-hidden='true'></i>
           Inloggen
        </button>
      </section>
    );
  }
}
