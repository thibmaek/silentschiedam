import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Pand extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    console.log(props);
  }

  static propTypes = {
    userImg: PropTypes.string,
    userName: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
  };

  static defaultProps = {
    likes: 0
  }

  render() {
    let {userImg, userName, artist, title, likes} = this.props;

    return(
      <article className='app-verzoek'>
        <div className='app-verzoek-header'><img src={userImg} alt={userName} className='app-verzoek-profo' /></div>
        <div className='app-verzoek-inzending'>
          <p className='app-verzoek-meta'>{userName} | 3min geleden</p>
          <p>{artist} - {title}</p>
        </div>
        <div className='app-verzoek-like'>
          {likes} <i className='fa fa-heart' aria-hidden='true'></i>
          <span>  Por {userName} <i className='fa fa-hand-o-right' aria-hidden='true'></i></span>
        </div>
      </article>
    );
  }
}
