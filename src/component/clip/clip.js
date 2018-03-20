import React from 'react'
import {connect} from 'react-redux'


class ClipItem extends React.Component {

    constructor(props){
      super()
      this.state = {counter: 0}
      this.handleSlide = this.handleSlide.bind(this)
    }
    componentWillMount(){
      this.setState({counter: 0})
    }
    handleSlide(){
      this.setState((prevState) => {
          return {counter: prevState.counter + 1};
      })
      document.getElementById('twitchVid').play()
    }

    render() {
      return (
        <div className="clip-item">
          <h2>{this.props.clip.broadcaster.display_name}</h2>
          <h3>{this.props.clip.title}</h3>
        <video onEnded={this.handleSlide} id="twitchVid" src={"https://clips-media-assets.twitch.tv/AT-" + this.props.thumbnails[this.state.counter] + "-854x480.mp4#t=0"} type="video/mp4" controls autoPlay></video>
        </div>
      )
    }
  }


  let mapStateToProps = state => ({
    sources: state.sources
  })

  export default connect(mapStateToProps)(ClipItem);