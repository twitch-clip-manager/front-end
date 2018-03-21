import {combineReducers} from 'redux';
import clips from './clips';
import channels from './channel';
import games from './game';
import token from './auth';

export default combineReducers({
    clips, channels, games, token
});
