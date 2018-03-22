import React from 'react'
import { connect } from 'react-redux'
import ClipItem from '../clip/clip'

class Landing extends React.Component {
  render() {    
    return (
      <div className="landing-container">
        <h1>Twitch Clip Manager</h1>
        {this.props.clips ?
          <ClipItem key={this.props.clips[0].tracking_id} clips={this.props.clips} thumbnails={this.props.thumbnails} />
          :
          undefined}
      </div>
    )
  }
}

let mapStateToProps = state => ({
  clips: state.clips,
  sources: state.sources,
  thumbnails: state.thumbnails,
})

let mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);