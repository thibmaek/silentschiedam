export default class AudioStream {
  constructor(url) {
    this.audio = new Audio(url);
  }

  play() {
    this.audio.play();
  }

  stop() {
    this.audio.pause();
  }
}
