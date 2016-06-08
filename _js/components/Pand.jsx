import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Pand extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  static propTypes = {
    naam: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired
  };

  static defaultProps =  {
    status: 'scheduled',
    imgUrl: 'pandplaceholder.jpg',
    genre: 'Onbekend'
  }

  render() {
    let {naam, status, imgUrl, genre} = this.props;

    return(
      <article className='app-pand'>
        <header>
          {naam}
          <aside className='app-pand-status'><img src={`/assets/svg/icon-${status}.svg`} alt={status} width='10' /> {status}</aside>
        </header>
        <div className='app-pand-img-wrap'>
          <aside className='app-tag'>#{genre}</aside>
          <Link to={`detail/${this.props['.key']}`}>
            <img className='app-pand-img' src={`/assets/img/${imgUrl}`} alt='Devine Takeover' />
          </Link>
          <img className='app-pand-overlay' src='assets/svg/pand-overlay.svg' alt='Deunen' />
        </div>
      </article>
    );
  }
}
