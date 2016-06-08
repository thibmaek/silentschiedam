import React, {Component, PropTypes} from 'react';
import {Auth} from '../config/firebase';

export default class Request extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  static propTypes = {
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    displayName: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired
  };

  static defaultProps = {
    likes: 0
  }

  render() {
    let {artist, title, likes, displayName, photoURL} = this.props;

    return(
      <article className='app-verzoek'>
        <div className='app-verzoek-header'><img src={photoURL} alt={displayName} className='app-verzoek-profo' /></div>
        <div className='app-verzoek-inzending'>
          <p className='app-verzoek-meta'>{displayName} | 3min geleden</p>
          <p>{artist} - {title}</p>
        </div>
        <div className='app-verzoek-like'>
          {likes} <i className='fa fa-heart' aria-hidden='true'></i>
          <span>  Por {displayName} <i className='fa fa-hand-o-right' aria-hidden='true'></i></span>
        </div>
      </article>
    );
  }
}
