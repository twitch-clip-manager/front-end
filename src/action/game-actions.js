import superagent from 'superagent'
import {logError} from '../lib/utils'

// ACTION CREATORS
export const gameSet = games => ({
  type: 'GAME_SET',
  payload: games
})

export const gameCreate = game => ({
  type: 'GAME_CREATE',
  payload: game
})

export const gameDelete = game => ({
  type: 'GAME_DELETE',
  payload: game
})

// ASYNC ACTIONS
export const gameFetchRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/v1/game`)
  .then(res => dispatch(gameSet(res.body)))
  .catch(logError)
}

export const gameCreateRequest = game => (dispatch, getState) => {
  return superagent.post(`${__API_URL__}/api/v1/game`)
  .send(game)
  .then(res => dispatch(gameCreate(res.body)))
  .catch(logError)
}

export const gameDeleteRequest = game => dispatch => {
  return superagent.delete(`${__API_URL__}/api/v1/game/${game._id}`)
  .then(res => dispatch(gameDelete(game)))
  .catch(logError)
}