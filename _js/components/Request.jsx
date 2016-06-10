import React, {Component, PropTypes} from 'react';
import {Database} from '../config/firebase';
import moment from 'moment';

export default class Request extends Component {
  static propTypes = {
    ['.key']: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    displayName: PropTypes.string.isRequired,
    photoURL: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  };

  static defaultProps = {
    likes: 0
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      liked: false
    };
  }

  formatDate() {
    moment.locale('nl');
    let a = moment(`${this.props.date}`);
    let b = a.from(moment());
    return b;
  }

  toggleLike() {
    let {liked} = this.state;

    Database.ref(`requests/${this.props.id}/${this.props['.key']}`)
    .transaction(data => {
      if (!liked) {
        data.likes++;
      }
      else {
        data.likes--;
      }
      this.setState({liked: !liked});
      return data;
    });
  }

  render() {
    let {artist, title, likes, displayName, photoURL} = this.props;
    let icon = 'fa-heart-o';
    if(this.state.liked) icon = 'fa-heart';

    return(
      <article className='app-verzoek'>
        <div className='app-verzoek-header'><img src={photoURL} alt={displayName} className='app-verzoek-profo' /></div>
        <div className='app-verzoek-inzending'>
          <p className='app-verzoek-meta'>{displayName} | {this.formatDate()}</p>
          <p>{artist} - {title}</p>
        </div>
        <div className='app-verzoek-like'>
          {likes} <i onClick={() => this.toggleLike()} className={`fa ${icon}`} aria-hidden='true'></i>
        </div>
      </article>
    );
  }
}
