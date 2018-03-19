import React from 'react';
import {connect} from 'react-redux';
import Modal from '../../dashboard/modal/modal';
// import AuthForm from '../auth/auth-form'
// import {signupRequest, signinRequest} from '../../action/auth-actions'


class Landing extends React.Component {
  render() {
    // console.log('__LANDING_PROPS__', this.props)
    // let {params} = this.props.match
    // let onComplete = params.auth === 'signin'
    //   ? this.props.signin
    //   : this.props.signup

    return (
      <div className="landing-container">
        <h1>Twitch Clip Manager</h1>

        <Modal ref={(node) => {this.modal = node;}} />
      </div>
    )
  }
}

// let mapStateToProps = () => ({})
// let mapDispatchToProps = dispatch => ({
//   signup: user => dispatch(signupRequest(user)),
//   signin: user => dispatch(signinRequest(user)),
// })

export default Landing
