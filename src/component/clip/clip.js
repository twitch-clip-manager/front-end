import React from 'react'

class ClipItem extends React.Component {
    render() {
      return (
        <div className="clip-item">
          <h2>{this.props.clip.broadcaster.display_name}</h2>
          <h3>{this.props.clip.title}</h3>
          <iframe id={this.props.clip.tracking_id} src={this.props.clip.embed_url}></iframe>
        </div>
      )
    }
  }

  export default ClipItem