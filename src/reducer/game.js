let validateGame = payload => {
    if(!payload._id) throw new Error('VALIDATION ERROR. Game must have an ID')
    if(!payload.name) throw new Error('VALIDATION ERROR. Game must have name')
}

export default (state=[], action) => {
  let {type, payload} = action

  switch(type) {
    case 'GAME_SET': return payload
    case 'GAME_CREATE':
      validateGame(payload)
      return [...state, payload]
    case 'GAME_UPDATE':
      validateGame(payload)
      return state.map(game => game._id === payload._id ? payload : game)
    case 'GAME_DELETE':
      validateGame(payload)
      return state.filter(game => game._id !== payload._id)
    default: return state
  }
}