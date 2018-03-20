import {
    OPEN_SIGNIN_MODAL,
    CLOSE_SIGNIN_MODAL
} from '../action/types';

const INITIAL_STATE = {
    isOpen: false
};

export default (state = INITIAL_STATE, action) => {
    switch (actiontype) {
        case OPEN_SIGNIN_MODAL:
            return { isOpen: action.payload };
        case CLOSE_SIGNIN_MODAL:
            return { isOpen: action.payload };
        default:
            return state;
    }
};