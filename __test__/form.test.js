import React from 'react';
import Enzyme from 'enzyme';
import {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import createStore from '../src/lib/app-create-store';
import {Provider} from 'react-redux';
require('jest');

Enzyme.configure({adapter: new Adapter()});
import Form from '../src/component/form/form';


describe('Form component', () => {

  let wrapper;
  let initialState;
  let store;
  beforeAll(() => {
    initialState = {'channel': ''};
    store = createStore(initialState);
    wrapper = mount(<Provider store={store}><Form /></Provider>);
    wrapper.setProps({onComplete: jest.fn()});
  });
  afterAll(() => wrapper.unmount());

  test('should have an initial state for channel', () => {
    wrapper.setState(initialState);
    expect(wrapper.state('channel')).toEqual('');
  });

  test('should have autocomplete component', () => {
    expect(wrapper.find('Autocomplete').length).toBe(2);
  });

});