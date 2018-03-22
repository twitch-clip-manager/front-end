import React from 'react'
import {connect} from 'react-redux'
import ClipItem from '../clip/clip'



class Landing extends React.Component {


  render() {
    console.log(this.props.clips)
    return (
      <div className="landing-container">
        <h1><img src="../src/assets/twitcher.png" /></h1>
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
  thumbnails: state.thumbnails,
})


export default connect(mapStateToProps)(Landing);