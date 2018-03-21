export default (state=null, action) => {
    let {type, payload} = action;
    
    switch(type) {
    case 'GET_CLIPS': return payload;
    default: return state;
    }
};