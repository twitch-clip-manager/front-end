import React from 'react'
import {connect} from 'react-redux'
import ClipItem from '../clip/clip'
import ModalButton from '../modal/modal-button';
import Modal from '../modal/modal';


class Landing extends React.Component {
  render() {
    const {buttonContainer} = styles;
    
    return (
      <Modal />
      <div className="landing-container">
        <h1>Twitch Clip Manager</h1>
        {this.props.clips ?
          this.props.clips.map(clip => <ClipItem key={clip.tracking_id} clip={clip}/>) :
          undefined}

          <ModalButton style={buttonContainer}/>
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

const styles = {
  buttonContainer: {
    width: 600,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10
  }
}

export default connect(mapStateToProps)(Landing);