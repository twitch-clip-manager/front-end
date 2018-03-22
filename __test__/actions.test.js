import { getClipsRequest } from '../src/action/actions';


describe('actions', () => {
  it('should test a game', () => {
    let state = { game: 'Overwatch', channel: ''};
    let dispatch = clips => clips;
    let results;
    return getClipsRequest(state)(dispatch)
    .then(clips => results = clips)
    .then(() => {
        expect(results.type).toEqual('GET_CLIPS')
        expect(results.payload.length).toEqual(10)
    })
  });
  it('should test a channel', () => {
    let state = { game: '', channel: 'AdmiralBulldog'};
    let dispatch = clips => clips;
    let results;
    return getClipsRequest(state)(dispatch)
    .then(clips => results = clips)
    .then(() => {
        expect(results.type).toEqual('GET_CLIPS')
        expect(results.payload.length).toEqual(10)
    })
  });
  it('should test top clips', () => {
    let state = { game: '', channel: ''};
    let dispatch = clips => clips;
    let results;
    return getClipsRequest(state)(dispatch)
    .then(clips => results = clips)
    .then(() => {
        expect(results.type).toEqual('GET_CLIPS')
        expect(results.payload.length).toEqual(10)
    })
  });
});

// export const getClipsRequest = (state) => dispatch => {
//     console.log(state)
//     if(state.game === '' && state.channel === '') {
//       console.log('inside')
//       return superagent.get(`${__API_URL__}/clips/top`)
//       .then(response => dispatch(getClips(response.body)))
//       .catch(err => console.log(err.message))
//     }
//     if(state.game === ''){
//       return superagent.get(`${__API_URL__}/clips/channel${state.channel}`)
//           .then(response => dispatch(getClips(response.body)))
//           .catch(err => console.log(err.message))
//     }
//     if(state.channel === ''){
//       return superagent.get(`${__API_URL__}/clips/game${state.game}`)
//         .then(response => dispatch(getClips(response.body)))
//         .catch(err => console.log(err.message))
//       }
//   };