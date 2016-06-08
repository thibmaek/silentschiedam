import React, {Component, PropTypes} from 'react';

export default class PlayButton extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      playing: false,
      icon: 'play'
    };
  }

  playHandler() {
    let {playing} = this.state;
  }

  render() {
    let {icon} = this.state;

    return(
      <div onClick={() => this.playHandler()} className={'app-audio-control'}><i className={`fa fa-${icon}`} aria-hidden='true'></i></div>
    );
  }
}
