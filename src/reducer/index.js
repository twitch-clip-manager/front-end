import {combineReducers} from 'redux';
import clips from './clips';
import channels from './channel';
import games from './game';
import token from './auth';
import sources from './sources';
import thumbnails from './thumbnails';


export default combineReducers({
    clips, channels, games, token, sources, thumbnails
});
