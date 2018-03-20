import React from 'react'

class ClipItem extends React.Component {
    render() {
      return (
        <div className="clip-item">
          <h2>{this.props.clip.broadcaster.display_name}</h2>
          <h3>{this.props.clip.title}</h3>
          <video id={this.props.clip.tracking_id} src={"https://clips-media-assets.twitch.tv/AT-" + this.props.clip.tracking_id + "-854x480.mp4#t=0"} type="video/mp4" controls></video>
        </div>
      )
    }
  }

  export default ClipItem