import React, {Component} from 'react';
import {Pand} from '.';

import {Database} from '../config/firebase';

export default class Panden extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  componentWillMount() {
    Database.ref('panden/').on('value', snapshot => {
      console.log(snapshot.val());
    });
  }

  render() {
    return(
      <section className='app-page'>
        <select className='app-select-filter' name='genre' id='genre'>
          <option value=''>Filter op genre</option>
          <option value='techno'>Techno</option>
          <option value='deephouse'>Deep House</option>
        </select>
        <Pand title='Devine Takeover' status='live' />
        <Pand title='Pauls Boutique' status='live' />
      </section>
    );
  }
}
