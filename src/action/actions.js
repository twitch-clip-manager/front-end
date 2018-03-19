import superagent from 'superagent';

export const getClips = token => ({
  type: 'GET_CLIPS',
  payload: token,
});

// export const tokenDelete = () => ({
//   type: 'TOKEN_DELETE',
// });

export const getClipsRequest = (state) => dispatch => {
  if(state.game === ''){
    return superagent.get(`${__API_URL__}/clips/channel${state.channel}`)
        .then(response => console.log(response.body))
        .catch(err => console.log(err.message))
  }
  if(state.channel === ''){
    return superagent.get(`${__API_URL__}/clips/game${state.game}`)
      .then(response => console.log(response.body))
      .catch(err => console.log(err.message))
    }
};

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.setItem('userid', res.body._id);
    });
};