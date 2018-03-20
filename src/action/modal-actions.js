import {
    OPEN_SIGNIN_MODAL,
    CLOSE_SIGNIN_MODAL
} from './types';

export const openSignInModal = () => ({
        type: OPEN_SIGNIN_MODAL,
        payload: true
});

export const closeSignInModal = () => ({
    type: CLOSE_SIGNIN_MODAL,
    payload: false
});