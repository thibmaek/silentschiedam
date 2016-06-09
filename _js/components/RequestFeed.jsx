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
    let {artist, title} = this.refs;
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

    Database.ref(`requests/${this.props.id}`).push(req);
  }

  render() {
    let {requests} = this.props;

    return(
      <section className='app-page'>
        <form action='' method='post' acceptCharset='utf-8' onSubmit={e => this.pushRequest(e)}>
          <input type='text' ref='artist' className='app-input-request' placeholder='Artiest' />
          <input type='text' ref='title' className='app-input-request' placeholder='Titel' />
          <input type='submit' className='app-request-submit' value='Verzend verzoek' />
          {requests.map(request => <Request key={request['.key']} id={this.props.id} {...request} />)}
        </form>
      </section>
    );
  }
}
