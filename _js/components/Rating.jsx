import React, {Component, PropTypes} from 'react';
import {Auth, Database} from '../config/firebase';

export default class Rating extends Component {
  static propTypes = {
    naam: PropTypes.string.isRequired,
    pandId: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      didRate: false
    };
  }

  pushRating(e) {
    e.preventDefault();
    let status = 'toegevoegd';
    if (this.state.didRate) {
      status = 'gewijzigd';
    }

    Database.ref(`/ratings/${this.props.pandId}/${Auth.currentUser.uid}`)
      .set({score: parseInt(this.refs.rating.value)}).then(() => {
        swal({
          title: `Rating ${status}`,
          type: 'success',
          timer: 1500,
          showConfirmButton: false
        });
        this.setState({didRate: true});
      }).catch(err => {
        swal({
          title: 'Rating kon niet wordentoegevoegd',
          type: 'error',
          text: err,
          timer: 1500,
          showConfirmButton: false
        });
      });
  }

  render() {
    return(
      <section className='app-detail-rate'>
        <p>Rate '{this.props.naam}'</p>
        <div className='app-detail-rater'>
          <select ref='rating' className='app-select-filter' name='genre' id='genre'>
            <option value='5'>5 ✩✩✩✩✩</option>
            <option value='4'>4 ✩✩✩✩</option>
            <option value='3'>3 ✩✩✩</option>
            <option value='2'>2 ✩✩</option>
            <option value='1'>1 ✩</option>
          </select>
          <button className='app-rating-button' type='submit' onClick={e => this.pushRating(e)}>
            Rate!
          </button>
        </div>
      </section>
    );
  }
}
