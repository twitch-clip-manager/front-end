export default (state=null, action) => {
    let {type, payload} = action;

    switch(type) {
    case 'GET_CLIPS':{
        let sources = payload.map((clip) => {
            let re = new RegExp('/(?<=tv/)(.*)(?=-preview)/g').exec(clip.thumbnails.medium);
            return re[1];
        });
        return sources;
    }
    // case 'TOKEN_DELETE': return null;
    default: return state;
    }
};