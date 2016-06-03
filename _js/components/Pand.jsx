import React, {Component, PropTypes} from 'react';

export default class Pand extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  static propTypes = {
    title: PropTypes.string,
    status: PropTypes.string
  };

  render() {
    let {title, status} = this.props;

    return(
      <article className='app-pand'>
        <header>
          {title}
          <aside><img src='/assets/svg/icon-live.svg' alt='Live' width='10' /> {status}</aside>
        </header>
        <div className='app-pand-img-wrap'>
          <a href='/detail/1'><img className='app-pand-img' src='/assets/img/pand.jpg' alt='Devine Takeover' /></a>
          <img className='app-pand-overlay' src='assets/svg/pand-overlay.svg' alt='Deunen' />
        </div>
      </article>
    );
  }
}
