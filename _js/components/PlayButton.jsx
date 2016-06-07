import React, {Component, PropTypes} from 'react';

export default class PlayButton extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      status: 'play'
    };
  }

  playHandler() {
    const audio = new Audio(this.props.url);
    let {status} = this.state;

    if (status === 'play') {
      audio.pause();
      this.setState({
        status: 'pause'
      });
    } else {
      audio.play();
      this.setState({
        status: 'play'
      });
    }
  }

  render() {
    let {status} = this.state;

    return(
      <div onClick={() => this.playHandler()} className={`app-audio-control ${status}`}><i className={`fa fa-${status}`} aria-hidden='true'></i></div>
    );
  }
}
