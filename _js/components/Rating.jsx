import React, {Component, PropTypes} from 'react';
import {Auth, Database} from '../config/firebase';

export default class Rating extends Component {
  static propTypes = {
    naam: PropTypes.string.isRequired,
    pandId: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  pushRating(e) {
    e.preventDefault();
    Database.ref(`/ratings/${this.props.pandId}/${Auth.currentUser.uid}`)
      .set({score: this.refs.rating.value});
  }

  render() {
    return(
      <section className='app-detail-rate'>
        <p>Rate '{this.props.naam}'</p>
        <select ref='rating' className='app-select-filter' name='genre' id='genre'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
        </select>
        <button className='app-rating-button' type='submit' onClick={e => this.pushRating(e)}>
          Rate
        </button>
      </section>
    );
  }
}
