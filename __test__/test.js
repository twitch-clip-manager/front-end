import React from 'react'
import {configure, shallow, mount}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux';
import createStore from '../src/lib/app-create-store';
import Form from '../src/component/form/form'
import ClipItem from '../src/component/clip/clip'
require('jest')

configure({adapter: new Adapter()});

describe('form', () => {
    test('form starting state', () => {
        let wrapper = mount(<Provider store={createStore()}><Form /></Provider>)
        wrapper.setState({game: 'overwatch', channel: ''})
        expect(wrapper.state().game).toEqual('overwatch')
        expect(wrapper.state().channel).toBe('')
    })
})
