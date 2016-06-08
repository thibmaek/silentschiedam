import React, {Component, PropTypes} from 'react';
import {PlayButton, DetailMap} from '../components';
import {Database, Auth} from '../config/firebase';
import {Link} from 'react-router';

import {basename} from '../config/globals';

export default class Detail extends Component {
  static propTypes = {
    params: PropTypes.object.isRequired
  };

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = {};
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

  componentDidMount() {
    this.getDetails();
  }

  componentWillMount() {
    this.checkLoginState();
  }

  getDetails() {
    Database.ref(`panden/${this.props.params.id}`).on('value', snapshot => {
      const details = snapshot.val();
      this.setState({details});
    });
  }

  renderDetails() {
    let indexNav = document.querySelector('.index-nav-identifier');
    if (indexNav) indexNav.style.display = 'none';
    if (this.state.details) {
      let {naam, info, djs, imgUrl, status, url, genre, location} = this.state.details;
      return(
        <div>
          <header className='app-header app-detail-header'>
            <img className='app-logo-nav' src={`${basename}/assets/svg/logo.svg`} alt='Silent Schiedam' />
            <nav className='app-top-nav app-detail-topnav'>
              <Link to='/home'><i className='fa fa-arrow-left' aria-hidden='true'></i></Link>
              <Link to='/logout'><i className='fa fa-sign-out' aria-hidden='true'></i></Link>
            </nav>
            <PlayButton url={url} />
            <div className='app-detail-imgwrap'>
              <img src={`${basename}/assets/img/${imgUrl}`} alt='Devine Takeover' className='app-detail-headerimg' />
            </div>
            <div className='app-detail-title'><aside className='app-tag app-tag-detail'>#{genre}</aside><h1>{naam}<img src={`${basename}/assets/svg/icon-${status}.svg`} alt={status} width='10' /></h1></div>
          </header>
          <nav>
            <ul className='app-navbar detail-navbar'>
              <li className='app-nav-item'><Link to={`/detail/${this.props.params.id}`}><i className='fa fa-home' aria-hidden='true'></i>Over dit pand</Link>
              <div className='app-nav-active active detail-nav-active'></div>
              </li>
              <li className='app-nav-item'><Link to={`/request/${this.props.params.id}`}><i className='fa fa-music' aria-hidden='true'></i>Plaats verzoek</Link>
              <div className='app-nav-active'></div></li>
            </ul>
          </nav>
          <section className='app-page'>
            <article className='app-page-text'>
              <h2>Wie zit hier?</h2>
              <p>{info}</p>
              <h2>Wie draait de plaatjes?</h2>
              <p>{djs}</p>
            </article>
            <DetailMap lat={location[0]} lng={location[1]} />
          </section>
          <section className='app-detail-rate'>
            Rate '{naam}'
            <div className='app-sterren'>
              <i className='fa fa-star-o' aria-hidden='true'></i>
              <i className='fa fa-star-o' aria-hidden='true'></i>
              <i className='fa fa-star-o' aria-hidden='true'></i>
              <i className='fa fa-star-o' aria-hidden='true'></i>
              <i className='fa fa-star-o' aria-hidden='true'></i>
            </div>
          </section>
        </div>
      );
    } else {
      return(
        <div className='spinner'>
          <div className='rect1'></div>
          <div className='rect2'></div>
          <div className='rect3'></div>
          <div className='rect4'></div>
          <div className='rect5'></div>
        </div>
      );
    }
  }

  render() {
    return(
      <section>
        {this.renderDetails()}
      </section>
    );
  }
}
