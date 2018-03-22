import clipReducer from '../src/reducer/clips';
import thumbnailReducer from '../src/reducer/thumbnails'

describe('category reducer', () => {
  it('should return the initial state', () => {
    expect(clipReducer(undefined, {})).toEqual(null);
  });

  it('should handle GET_CLIPS', () => {
    let clipOne = { _id: '1234', title: 'this is a title', timestamp: new Date()};
    let clipTwo = { _id: '456', title: 'this is a title', timestamp: new Date() };
    let state = clipReducer(null, {
      type: 'GET_CLIPS',
      payload: [clipOne, clipTwo],
    });

    expect(state).toContain(clipOne);
    expect(state).toContain(clipTwo);
  });
});

describe('thumbnail reducer', () => {
    it('should return the initial state', () => {
      expect(thumbnailReducer(undefined, {})).toEqual(null);
    });
  
    it('should handle GET_CLIPS', () => {
      let clipOne = { thumbnails: {medium: 'https://clips-media-assets.twitch.tv/210453760-preview-480x272.jpg'} };
      let state = thumbnailReducer(null, {
        type: 'GET_CLIPS',
        payload: [clipOne],
      });
  
      expect(state[0]).toEqual('210453760');
    });
});

