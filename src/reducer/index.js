import {combineReducers} from 'redux';
import clips from './clips';
import sources from './sources';
import thumbnails from './thumbnails';

export default combineReducers({
    clips,
    sources,
    thumbnails,
});
