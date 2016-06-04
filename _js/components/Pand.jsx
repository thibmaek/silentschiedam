import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Pand extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  static propTypes = {
    naam: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  };

  render() {
    let {naam, status} = this.props;

    return(
      <article className='app-pand'>
        <header>
          {naam}
          <aside><img src={`/assets/svg/icon-${status}.svg`} alt={status} width='10' /> {status}</aside>
        </header>
        <div className='app-pand-img-wrap'>
          <Link to=''>
            <img className='app-pand-img' src='/assets/img/pand.jpg' alt='Devine Takeover' />
          </Link>
          <img className='app-pand-overlay' src='assets/svg/pand-overlay.svg' alt='Deunen' />
        </div>
      </article>
    );
  }
}
