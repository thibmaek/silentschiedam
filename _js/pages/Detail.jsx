import React, {Component} from 'react';
// import {basename} from '../config/globals';

export default class Detail extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return(
      <section>
        <header className='app-header app-detail-header'>
          <img className='app-logo-nav' src='assets/svg/logo.svg' alt='Silent Schiedam' />
          <nav className='app-top-nav app-detail-topnav'>
            <a href='/'><i className='fa fa-arrow-left' aria-hidden='true'></i></a>
            <a href='#'><i className='fa fa-user' aria-hidden='true'></i></a>
          </nav>
          <div className='app-audio-control play'><i className='fa fa-play' aria-hidden='true'></i></div>
          <div className='app-audio-control pause'><i className='fa fa-pause' aria-hidden='true'></i></div>
          <div className='app-detail-imgwrap'>
            <img src='assets/img/pand.jpg' alt='Devine Takeover' className='app-detail-headerimg' />
          </div>
          <div className='app-detail-title'><h1>Devine Takeover <img src='assets/svg/icon-live.svg' alt='Live' width='10' /></h1></div>
        </header>
        <nav>
          <ul className='app-navbar'>
            <li className='app-nav-item'><a href='#'><i className='fa fa-home' aria-hidden='true'></i>Over dit pand</a>
            <div className='app-nav-active active'></div>
            </li>
            <li className='app-nav-item'><a href='pand-verzoek.html'><i className='fa fa-music' aria-hidden='true'></i>Plaats verzoek</a>
            <div className='app-nav-active'></div></li>
          </ul>
        </nav>
        <section className='app-page'>
          <article className='app-page-text'>
            <h2>Devine wat?</h2>
            <p>
            is een driejarig keuzetraject binnen de professionele bachelor Multimedia en Communicatietechnologie. Je kan deze opleiding enkel volgen aan Howest, de Hogeschool West-Vlaanderen.
            </p>
            <h2>Kom eens langs!</h2>
            <p>
            Kom een babbeltje slaan met onze studenten en alumni en laat je overtuigen om de tofste opleiding te sturen die er is! En oja, er zijn goodies!
            </p>
            <h2>Aan de decks</h2>
            <p>
            10u - 15u: DJ Thibmate<br />
            15u - 18u: DJ Kevmate
            </p>
          </article>
        </section>
        <section className='app-detail-rate'>
          Rate 'Devine Takeover'
          <div className='app-sterren'>
            <i className='fa fa-star-o' aria-hidden='true'></i>
            <i className='fa fa-star-o' aria-hidden='true'></i>
            <i className='fa fa-star-o' aria-hidden='true'></i>
            <i className='fa fa-star-o' aria-hidden='true'></i>
            <i className='fa fa-star-o' aria-hidden='true'></i>
          </div>
        </section>
      </section>
    );
  }
}
