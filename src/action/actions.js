import superagent from 'superagent';

export const getClips = clips => ({
  type: 'GET_CLIPS',
  payload: clips.clips,
});


export const getClipsRequest = (state) => dispatch => {
  console.log(state)
  if(state.game === '' && state.channel === '') {
    console.log('inside')
    return superagent.get(`${__API_URL__}/clips/top`)
    .then(response => dispatch(getClips(response.body)))
    .catch(err => console.log(err.message))
  }
  if(state.game === ''){
    return superagent.get(`${__API_URL__}/clips/channel${state.channel}`)
        .then(response => dispatch(getClips(response.body)))
        .catch(err => console.log(err.message))
  }
  if(state.channel === ''){
    return superagent.get(`${__API_URL__}/clips/game${state.game}`)
      .then(response => dispatch(getClips(response.body)))
      .catch(err => console.log(err.message))
    }
};
