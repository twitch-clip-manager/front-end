import {combineReducers} from 'redux';
import clips from './clips';
import thumbnails from './thumbnails';

export default combineReducers({
    clips,
    thumbnails,
});
