import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'redux';
import { openSignInModal} from '../../action/modal-actions';

class ModalButton extends Component {
    render() {
        return (
            <View style={this.props.style}>
            <Button
                raised
                title="View Sign In Modal"
                backgroundColor="#2196F3"
                onPress={() => this.props.openSignInModal()}
            />
            </View>
        );
    }
}



export default connect(null, {openSignInModal})(ModalButton)