import React, {Component, PropTypes} from 'react';

import Firebase from 'firebase';
import {Auth} from '../config/firebase';

export default class Login extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    Auth.onAuthStateChanged(user => {
      if(user) {
        swal({
          title: 'Ingelogd!',
          text: `Welkom ${user.displayName}`,
          type: 'success',
          timer: 1000
        });
        this.context.router.push('/home');
      } else {
        console.log('er is geen user, pls log in mate');
      }
    });
  }

  fbLogin() {
    const provider = new Firebase.auth.FacebookAuthProvider();
    Auth.signInWithRedirect(provider);
  }

  twitterLogin() {
    const provider = new Firebase.auth.TwitterAuthProvider();
    Auth.signInWithRedirect(provider);
  }

  render() {
    let logoutIcon = document.querySelector('.fa-sign-out');
    logoutIcon.style.display = 'none';
    return(
      <div>
        <header className='app-header login-header'>
          <img className='app-logo' src='assets/svg/logo.svg' alt='Silent Schiedam' />
          <div className='app-header-illustratie'>
          <article className='app-page-text login-text'>
            <h2>Welkom in de Hoogstraat!</h2>
            <p>Silent Schiedam is een muzikale winkel-ervaring in het hart van de stad Schiedam. Maak een muzikale reis door de hoogstraat en ontdek leuke nieuwe winkelconcepten.</p>
            <button className='login-button-facebook' onClick={this.fbLogin}>
              <i className='fa fa-facebook-official' aria-hidden='true'></i>
               Inloggen
            </button>
            <button className='login-button-twitter' onClick={this.twitterLogin}>
              <i className='fa fa-twitter' aria-hidden='true'></i>
               Inloggen
            </button>
          </article>
            <div className='molenbase molen-pos-one login-molen'>
              <img src='assets/svg/base.svg' alt='' className='molen-base-img' />
              <img src='assets/svg/draai.svg' alt='' className='molen-draai-img' />
            </div>
            <div className='molenbase molen-pos-two login-molen'>
              <img src='assets/svg/base.svg' alt='' className='molen-base-img' />
              <img src='assets/svg/draai.svg' alt='' className='molen-draai-img' />
            </div>
          </div>
        </header>
      </div>
    );
  }
}
