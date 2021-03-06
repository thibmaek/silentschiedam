import React, {Component, PropTypes} from 'react';
import {Request} from '.';

import {Database, Auth} from '../config/firebase';
import moment from 'moment';

export default class RequestFeed extends Component {
  static propTypes = {
    requests: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  pushRequest(e) {
    e.preventDefault();
    let {artist, title, form, submit} = this.refs;
    let {displayName, photoURL} = Auth.currentUser;

    if(artist.value === ''){artist.focus();return;}
    if(title.value === ''){title.focus();return;}

    const req = {
      artist: artist.value,
      date: moment().toISOString(),
      displayName: displayName,
      likes: 0,
      photoURL: photoURL,
      title: title.value
    };

    Database.ref(`requests/${this.props.id}`).push(req)
    .then(() => {
      swal({
        title: 'Verzoek toegevoegd',
        text: `${artist.value} - ${title.value}
        Je kan terug een verzoekje maken binnen 1 minuut.`,
        type: 'success'
      });
      artist.value = '';title.value = '';
      submit.disabled = true;form.classList.add('request-disabled');
    }).then(() => {
      setTimeout(() => {
        form.classList.remove('request-disabled');submit.disabled = false;
      }, 60000);
    })
    .catch(err => {
      swal({
        title: 'Je verzoek kon niet worden toegevoegd',
        type: 'error',
        text: err,
        timer: 1500
      });
      artist.focus();
    });
  }

  render() {
    let {requests} = this.props;

    return(
      <section className='app-page'>
        <form ref='form' action='' method='post' acceptCharset='utf-8' onSubmit={e => this.pushRequest(e)}>
          <input type='text' ref='artist' className='app-input-request' placeholder='Artiest' />
          <input type='text' ref='title' className='app-input-request' placeholder='Titel' />
          <input type='submit' ref='submit' className='app-request-submit' value='Verzend verzoek' />
        </form>
        {requests.map(request => <Request key={request['.key']} id={this.props.id} {...request} />)}
      </section>
    );
  }
}
