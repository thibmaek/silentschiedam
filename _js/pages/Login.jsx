import React, {Component} from 'react';
import Firebase from 'firebase';
import {Auth} from '../config/firebase';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    Auth.onAuthStateChanged(user => {
      this.setState({
        auth: (user) ? true : false
      });
    });
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
