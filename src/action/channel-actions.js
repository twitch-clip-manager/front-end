import superagent from 'superagent'
import {logError} from '../lib/utils'

// ACTION CREATORS
export const channelSet = channels => ({
  type: 'CHANNEL_SET',
  payload: channels
})

export const channelCreate = channel => ({
  type: 'CHANNEL_CREATE',
  payload: channel
})

export const channelDelete = channel => ({
  type: 'CHANNEL_DELETE',
  payload: channel
})

export const channelListSet = channel => ({
  type: 'CHANNEL_LIST_SET',
  payload: channel
})

// ASYNC ACTIONS
export const channelFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/channel`)
  .then(res => dispatch(channelSet(res.body)))
  .catch(logError)
}

export const channelCreateRequest = channel => (dispatch, getState) => {
  console.log(__API_URL__);
  return superagent.post(`${__API_URL__}/api/v1/channel`)
  .send(channel)
  .then(res => dispatch(channelCreate(res.body)))
  .catch(logError)
}

export const channelDeleteRequest = channel => dispatch => {
  return superagent.delete(`${__API_URL__}/api/v1/channel/${channel}`)
  .then(res => dispatch(channelDelete(channel)))
  .catch(logError)
}