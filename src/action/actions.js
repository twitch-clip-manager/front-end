import superagent from 'superagent';

export const getClips = clips => ({
  type: 'GET_CLIPS',
  payload: clips.clips,
});

// export const tokenDelete = () => ({
//   type: 'TOKEN_DELETE',
// });

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

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/signin`)
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.setItem('userid', res.body._id);
    });
};

export const logoutRequest = token => dispatch => {
  return superagent.put(`${__API_URL__}/logout`)
    .set('Authorization', 'Bearer ${token}')
    .then(res => {
      dispatch(tokenDelete());
      localStorage.token.clear();
    });
};