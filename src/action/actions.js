import superagent from 'superagent';

export const getClips = token => ({
  type: 'GET_CLIPS',
  payload: token,
});

// export const tokenDelete = () => ({
//   type: 'TOKEN_DELETE',
// });

export const getClipsRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/clips/top`)
    // .set('Client-ID', '490xfzohxg3ilxjcq7uifjssyqwo5e')
    // .set('Accept', 'application/vnd.twitchtv.v5+json')
    .then(response => console.log(response.body))
    .catch(err => console.log(err.message))
};

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .then(res => {
      dispatch(tokenSet(res.text));
      localStorage.setItem('userid', res.body._id);
    });
};