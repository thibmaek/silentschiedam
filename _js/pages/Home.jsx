import React, {Component} from 'react';
import {Panden} from '../components/';

import ReactFireMixin from 'reactfire';
import reactMixin from 'react-mixin';

import {Database} from '../config/firebase';

export default class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      panden: []
    };
  }

  componentDidMount() {
    this.getPanden();
  }

  getPanden() {
    const ref = Database.ref('panden/');
    this.bindAsArray(ref, 'panden');
  }

  render() {
    let {panden} = this.state;

    return(
      <section className='app-home-container'>
        <nav>
          <ul className='app-navbar'>
            <li className='app-nav-item'><a href='#'><i className='fa fa-home' aria-hidden='true'></i>Panden</a>
            <div className='app-nav-active active'></div>
            </li>
            <li className='app-nav-item'><a href='/info'><i className='fa fa-info-circle' aria-hidden='true'></i>Informatie</a>
            <div className='app-nav-active'></div></li>
          </ul>
        </nav>
        <Panden panden={panden} />
      </section>
    );
  }
}

reactMixin(Home.prototype, ReactFireMixin);
