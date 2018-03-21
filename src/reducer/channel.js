// let validateChannel = payload => {
//     if(!payload._id) throw new Error('VALIDATION ERROR. User must have an ID')
//     if(!payload.name) throw new Error('VALIDATION ERROR. User must have name')
// }
export default (state=[], action) => {
  let {type, payload} = action
  console.log('state = ',state, 'pl = ', payload)
  // validateAlbum(payload) // Reminder that we can't do this in every case, so it's situational.

  switch(type) {
    case 'CHANNEL_SET': 
      return [...state, payload]
    case 'CHANNEL_CREATE':
      validateChannel(payload)
      return [...state, payload]
    case 'CHANNEL_UPDATE':
      validateChannel(payload)
      return state.map(channel => channel._id === payload._id ? payload : channel)
    case 'CHANNEL_DELETE':
      validateChannel(payload)
      return state.filter(channel => channel._id !== payload._id)
    case 'CHANNEL_LIST_SET':
      return [payload, ...state]
    default: return state
  }
}