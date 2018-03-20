import {combineReducers} from 'redux';
import clips from './clips';
import modal from './modal-reducer';
// import picture from './picture';

export default combineReducers({
    clips, modal
});
