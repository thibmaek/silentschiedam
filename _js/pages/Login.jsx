import React, {Component, PropTypes} from 'react';

import Firebase from 'firebase';
import {Auth} from '../config/firebase';
const uid = sessionStorage.getItem('uid');

export default class Login extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    if (uid) this.context.router.push('/home');

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
      <div>
        <header className='app-header'>
          <img className='app-logo' src='assets/svg/logo.svg' alt='Silent Schiedam' />
          <div className='app-header-illustratie'>
            <div className='molenbase molen-pos-one'>
              <img src='assets/svg/base.svg' alt='' className='molen-base-img' />
              <img src='assets/svg/draai.svg' alt='' className='molen-draai-img' />
            </div>
            <div className='molenbase molen-pos-two'>
              <img src='assets/svg/base.svg' alt='' className='molen-base-img' />
              <img src='assets/svg/draai.svg' alt='' className='molen-draai-img' />
            </div>
          </div>
        </header>
        <section className='app-login-container'>
          <article className='app-page-text'>
            <h2>Welkom in de Hoogstraat!</h2>
            <p>Silent Schiedam is een muzikale winkel-ervaring in het hart van de stad Schiedam. Maak een muzikale reis door de hoogstraat en ontdek leuke nieuwe winkelconcepten.</p>
            <h2>Log in om verder te gaan</h2>
            <p>We hebben nog wat informatie nodig voor je kan genieten van de live-streams.</p>
            <button className='login-button-facebook' onClick={this.fbLogin}>
            <i className='fa fa-facebook-official' aria-hidden='true'></i>
               Inloggen
            </button>
          </article>
        </section>
      </div>
    );
  }
}
