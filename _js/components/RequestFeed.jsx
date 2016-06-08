import React, {Component, PropTypes} from 'react';
import {Request} from '.';

import {Database, Auth} from '../config/firebase';

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
      displayName: displayName,
      pandId: this.props.id,
      photoURL: photoURL,
      title: title.value,
      date: Date()
    };

    Database.ref('requests').push(req);
  }

  render() {
    let {requests} = this.props;

    return(
      <section className='app-page'>
        <form action='' method='post' acceptCharset='utf-8' onSubmit={e => this.pushRequest(e)}>
          <input type='text' ref='title' className='app-input-request' placeholder='Titel' />
          <input type='text' ref='artist' className='app-input-request' placeholder='Uitvoerder' />
          <input type='submit' className='app-request-submit' value='Verzend verzoek' />
          {requests.map(request => <Request key={request['.key']} {...request} />)}
        </form>
      </section>
    );
  }
}
