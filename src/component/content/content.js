import React from 'react';
import {connect} from 'react-redux';
import AuthForm from '../auth/auth-form';
import {signupRequest, signinRequest} from '../../action/auth-actions';
import { log } from '../../lib/utils';

class Content extends React.Component {
    render() {
        console.log('__LANDING_PROPS__', this.props);
        let {location} = this.props;
        
        let onComplete = location.pathname === '/signin'
            ? this.props.signin
            : this.props.signup;

        return (
            <div className="content-container">
                <h1>Twitch Clip Manager</h1>
                <AuthForm
                    location = {location.pathname}
                    onComplete = {onComplete}
                />
            </div>
        );
    }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signupRequest(user)),
    signin: user => dispatch(signinRequest(user)),
    // createProfileRequest: token => dispatch(createProfileRequest(token)),
    // getProfileRequest: token => dispatch(getProfileRequest(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);