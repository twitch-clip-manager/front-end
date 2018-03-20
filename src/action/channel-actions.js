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

export const channelUpdate = channel => ({
  type: 'CHANNEL_UPDATE',
  payload: channel
})

export const channelDelete = channel => ({
  type: 'CHANNEL_DELETE',
  payload: channel
})

// ASYNC ACTIONS
export const channelFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/channel`)
  .then(res => dispatch(channelSet(res.body)))
  .catch(logError)
}

export const channelCreateRequest = channel => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/channel`)
  .send(channel)
  .then(res => dispatch(channelCreate(res.body)))
  .catch(logError)
}

export const channelUpdateRequest = channel => dispatch => {
  return superagent.post(`${__API_URL__}/api/v1/channel/${channel._id}`)
  .send(channel)
  .then(res => dispatch(channelUpdate(channel)))
  .catch(logError)
}

export const channelDeleteRequest = channel => dispatch => {
  return superagent.delete(`${__API_URL__}/api/v1/channel/${channel._id}`)
  .then(res => dispatch(channelDelete(channel)))
  .catch(logError)
}