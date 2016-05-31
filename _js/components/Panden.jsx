import React, {Component} from 'react';
import {Pand} from '.';

export default class Panden extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return(
      <Pand title='Pand titel 1' status={0} />
    );
  }
}
