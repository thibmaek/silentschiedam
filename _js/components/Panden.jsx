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
      <Pand title='Pand titel 1' status={0} />
    );
  }
}
