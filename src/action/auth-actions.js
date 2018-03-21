import superagent from 'superagent'

export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
})

export const tokenDelete = () => ({
  type: 'TOKEN_DELETE',
})

export const signupRequest = user => dispatch => {
  return superagent.post(`${API_URL}/signup`)
  .send(user)
  .then(res => {
    dispatch(tokenSet(res.text))
    try {
      localStorage.setItem('token', res.text)
    } catch(e) {
      console.log(e)
      throw e
    }
  })
}

export const signinRequest = user => dispatch => {
  return superagent.get(`${API_URL}/login`)
  .auth(user.username, user.password)
  .then(res => dispatch(tokenSet(res.text)))
}