import React, {Component, PropTypes} from 'react';
import AudioStream from '../config/silentschiedam';

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
    this.audio = new AudioStream(this.props.url);
  }

  playHandler() {
    let {playing} = this.state;

    if (playing) {this.audio.stop();}
    else {this.audio.play();}

    this.setState({playing: !playing});
  }

  render() {
    let icon = 'fa-play';
    if(this.state.playing) icon = 'fa-pause';

    return(
      <div onClick={() => this.playHandler()} className={'app-audio-control'}><i className={`fa ${icon}`} aria-hidden='true'></i></div>
    );
  }
}
