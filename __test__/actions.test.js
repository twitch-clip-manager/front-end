import * as actions from '../src/action/actions';
// import CategoryForm from '../components/category/category-form';

describe('actions', () => {
  it('should create an action to get clips', () => {
    let mockClips = { clips: ['mock clip'] };

    const expectedAction = {
      type: 'GET_CLIPS',
      payload: mockClips,
    };

    let action = actions.getClips(mockClips);

    expect(action.type).toEqual('GET_CLIPS');
    expect(action.payload[0]).toEqual('mock clip');
  });
  // it('should make a call to get clips from twitch api', () => {
  //   let mockState = {games:'Overwatch', channel: ''}
  //   actions.getClipsRequest(mockState)

  //   // expect(action.type).toEqual('GET_CLIPS');
  //   // expect(action.payload[0]).toEqual('mock clip');
  // });
});