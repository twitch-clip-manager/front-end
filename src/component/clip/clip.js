import React from 'react'
import {connect} from 'react-redux'
import superagent from 'superagent'

class ClipItem extends React.Component {

    constructor(props){
      super()
      this.state = {counter: 0}
      this.handleSlide = this.handleSlide.bind(this)
      this.log = this.log.bind(this)
    }


componentDidMount() {
/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  // console.log(icon);
  toggle.textContent = icon;
}

function skip() {
 video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);


document.body.onkeyup = function(e){
    if(e.keyCode == 32){

togglePlay()
    }
};


}

    componentWillMount(){
      this.setState({counter: 0})
    }
    handleSlide(){
      this.setState((prevState) => {
          if(this.state.counter >= this.props.thumbnails.length - 1){
            return {counter: 0};
          }else{
            return {counter: prevState.counter + 1};
          }



      })
      document.getElementById('twitchVid').play()
    }
    log(){
      console.log('whoops')
    }

    render() {
      return (
          <div className="clip-item">
            <div className="player">
              <video className="player__video viewer" onEnded={this.handleSlide} id="twitchVid" src={"https://clips-media-assets.twitch.tv/AT-" + this.props.thumbnails[this.state.counter] + "-854x480.mp4#t=0"} type="video/mp4" onError={this.handleSlide} autoPlay></video>
              <div className="player__controls">
              <div className="progress">
              <div className="progress__filled"></div>
              </div>
              <button className="player__button toggle" title="Toggle Play">►</button>
              <input type="range" name="volume" className="player__slider" min="0" max="1" step="0.05" defaultValue="1" />
              <input type="range" name="playbackRate" className="player__slider" min="0.5" max="2" step="0.1" defaultValue="1" />
              <button data-skip="-5" className="player__button">« 5s</button>
              <button data-skip="10" className="player__button">10s »</button>
              </div>
            </div>
            
          <a href={this.props.clips[this.state.counter].broadcaster.channel_url}>
            <img className="user-logo" src={this.props.clips[this.state.counter].broadcaster.logo} />
          </a>
          <h2 className="user-name">
            <a href={this.props.clips[this.state.counter].broadcaster.channel_url}>
                {this.props.clips[this.state.counter].broadcaster.display_name}
            </a>
          </h2>
          <h3>{this.props.clips[this.state.counter].title}</h3>
          </div>

      )
    }
  }


  let mapStateToProps = state => ({
    sources: state.sources
  })

  export default connect(mapStateToProps)(ClipItem);







