import superagent from 'superagent';


export const profileSet = profile => ({
    type: 'PROFILE_SET', 
    payload: profile,
});

export const tokenSet = token => ({
    type: 'TOKEN_SET',
    payload: token,
});

export const tokenDelete = () => ({
    type: 'TOKEN_DELETE',
});

export const signupRequest = user => dispatch => {
    return superagent.post(`${__API_URL__}/signup`)
        .send(user)
        .then(res => {
            console.log('response: ', res);
            dispatch(tokenSet(res.text));
            try {
                localStorage.setItem('token', res.text);
            } catch(e) {
                console.log(e);
                throw e;
            }
        });
};

export const signinRequest = user => dispatch => {
    return superagent.get(`${__API_URL__}/signin`)
        .auth(user.username, user.password)
        .then(res => dispatch(tokenSet(res.text)));
};

export const getProfileRequest = token => dispatch => {
    return  superagent.get(`${__API_URL__}/profiles/me`)
        .set({'Authorization': `Bearer ${token}`})
        .then(res => dispatch(profileSet(res.body)));
};
  
export const createProfileRequest = token => dispatch => {
    return  superagent.post(`${__API_URL__}/profiles`)
        .set({'Authorization': `Bearer ${token}`})
        .send({bio: ''})
        .then(res => dispatch(profileSet(res.body)));
};