import * as actions from '../action/actions';
// import CategoryForm from '../components/category/category-form';

describe('actions', () => {
  it('should create an action to add a category', () => {
    let clips = { title: 'this is a title' };

    const expectedAction = {
      type: 'CATEGORY_CREATE',
      payload: category,
    };

    let action = actions.getClips(category);

    expect(action.type).toEqual('CATEGORY_CREATE');
    expect(action.payload).toHaveProperty('_id');
    expect(action.payload).toHaveProperty('timestamp');
  });
});