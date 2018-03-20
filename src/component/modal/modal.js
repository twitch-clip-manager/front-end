import React, { component } from 'react';
import { View, Modal } from 'react-native';
import { Button, Text } from 'react-native-elements';
import {connect } from 'react-redux';
import { closeSignInModal} from '../../action/modal-actions';

class Modal extends Component {

    render() {
        const { modalStyle } = styles;
        const { containerStyle } = styles;
        const { buttonContainerStyle} = styles;

        return (
            <Modal
                transparent
                animationType={'slide'}
                visible={this.props.modal.isOpen}
                onRequestClose={() => this.props.closeSignInModal()}>
                <View style={modalStyle}>
                    <View style={containerStyle}>
                        <View style={buttonContainerStyle}>
                            <Button
                                raised
                                title="close"
                                backgroundColor="#2196F3"
                                onPress={() => this.props.closeSignInModal()}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = {
    modalStyle: {
        flew: 1,
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    containerStyle: {
        flew: 1,
        margin: auto,
        backgroundColor: 'white'
    },
    buttonContainerStyle: {
        paddingBottom: 10
    }
}

const mapStateToProps = ({ modal, }) => ({ modal });

export default connect(mapStateToProps, { closeSignInModal })(Modal)