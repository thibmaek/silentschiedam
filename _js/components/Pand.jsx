import React, {Component, PropTypes} from 'react';

export default class Pand extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  static propTypes = {
    title: PropTypes.string,
    status: PropTypes.number
  };

  render() {
    let {title, status} = this.props;

    return(
      <article>
        <header>
          <h2>{title}</h2>
          <span className='fa fa-circle'>{status}</span>
        </header>
      </article>
    );
  }
}
