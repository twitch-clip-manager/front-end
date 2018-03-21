export default (state=null, action) => {
    let {type, payload} = action;

    switch(type) {
    case 'GET_CLIPS':{
      let sources = payload.map((clip) => {
        return clip.tracking_id
      })
      return sources;
    }
    default: return state;
    }
  };