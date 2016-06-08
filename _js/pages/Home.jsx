import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {Panden} from '../components/';

import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';
import {Database, Auth} from '../config/firebase';

export default class Home extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      panden: []
    };
  }

  componentWillMount() {
    this.checkLoginState();

    const ref = Database.ref('panden/');
    this.bindAsArray(ref, 'panden');
  }

  checkLoginState() {
    Auth.onAuthStateChanged(user => {
      if (user) {
        console.log(`Logged in as ${Auth.currentUser.displayName}`);
      } else {
        this.context.router.push('/login');
      }
    });
  }

  render() {
    let indexNav = document.querySelector('.index-nav-identifier');
    if (indexNav){
      indexNav.style.display = 'flex';
    }
    let logoutIcon = document.querySelector('.fa-sign-out');
    logoutIcon.style.display = 'block';

    let {panden} = this.state;

    return(
      <div>
        <header className='app-header'>
          <div className='logout-knop'><Link to='/logout'><i className='fa fa-sign-out' aria-hidden='true'></i></Link></div>
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
          <img className='app-pand-overlay nav-overlay' src='assets/svg/pand-overlay.svg' alt='Deunen' />
        </header>
        <section className='app-home-container'>
          <nav>
            <ul className='app-navbar'>
              <li className='app-nav-item'><Link to='/home'><i className='fa fa-home' aria-hidden='true'></i>Panden</Link>
              <div className='app-nav-active active'></div>
              </li>
              <li className='app-nav-item'><Link to='/info'><i className='fa fa-info-circle' aria-hidden='true'></i>Informatie</Link>
              <div className='app-nav-active'></div></li>
            </ul>
          </nav>
          <Panden panden={panden} />
        </section>
      </div>
    );
  }
}

reactMixin(Home.prototype, ReactFireMixin);
