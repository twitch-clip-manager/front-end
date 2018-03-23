import React from 'react';
import {connect} from 'react-redux';
import superagent from 'superagent';

class ClipItem extends React.Component {

    constructor(props){
        super();
        this.state = {counter: 0};
        this.handleSlide = this.handleSlide.bind(this);
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

                togglePlay();
            }
        };


    }

    componentWillMount(){
        this.setState({counter: 0});
    }
    handleSlide(){
        this.setState((prevState) => {
            if(this.state.counter >= this.props.thumbnails.length - 1){
                return {counter: 0};
            }else{
                return {counter: prevState.counter + 1};
            }



        });
        document.getElementById('twitchVid').play();
    }

    render() {
        return (
            <div className="clip-item">
                <div className="player">
                    <video className="player__video viewer" onEnded={this.handleSlide} id="twitchVid" src={'https://clips-media-assets.twitch.tv/AT-' + this.props.thumbnails[this.state.counter] + '-854x480.mp4#t=0'} type="video/mp4" onError={this.handleSlide} autoPlay></video>
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
                <h3>{this.props.clips[this.state.counter].title}
                    <a className="twit" href={"http://twitter.com/share?url=" + encodeURIComponent(this.props.clips[this.state.counter].url) + "&text=" + encodeURIComponent('check out this clip on twitch!!') } target="_blank" class="outline-0-focus db link color-inherit hover-blue4 fw6 pa3 mt1-l pv4-l ph2-l bt bw1 b--gray1 bn-l fr-l"><svg aria-hidden="true" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="dib svg-inline--fa fa-twitter fa-w-16 fa-fw fa-lg"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" class=""></path></svg> <span class="dib v-mid dn-l ml2"></span></a>
                    <a href={this.props.clips[this.state.counter].url}>Watch on Twitch</a>
                
                </h3>
            </div>

        );
    }
}


let mapStateToProps = state => ({
});

export default connect(mapStateToProps)(ClipItem);







