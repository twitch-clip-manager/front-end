import React from 'react'
import {connect} from 'react-redux'
import ClipItem from '../clip/clip'

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-container">
        <h1>Twitch Clip Manager</h1>

        {this.props.clips ?
          this.props.clips.map(clip => <ClipItem key={clip.tracking_id} clip={clip}/>) :
          undefined}
      </div>
    )
  }
}

let mapStateToProps = state => ({
  clips: state.clips
})
// let mapDispatchToProps = dispatch => ({
//   signup: user => dispatch(signupRequest(user)),
//   signin: user => dispatch(signinRequest(user)),
// })


export default connect(mapStateToProps)(Landing);