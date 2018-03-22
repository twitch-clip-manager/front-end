import {combineReducers} from 'redux';
import clips from './clips';
import token from './auth';
import sources from './sources';
import thumbnails from './thumbnails';


export default combineReducers({
    clips, token, sources, thumbnails
});
