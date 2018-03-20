import React from 'react'
import {configure, shallow, mount}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux';
import createStore from '../src/lib/app-create-store';
require('jest')

configure({adapter: new Adapter()});
import Form from '../src/component/form/form'

describe('form', () => {
    test('starting state', () => {
        let wrapper = mount(<Provider store={createStore()}><Form /></Provider>)
        console.log(wrapper.state())
        wrapper.setState({game: 'overwatch', channel: ''})
        console.log(wrapper.state())
        expect(wrapper.state().game).toEqual('overwatch')
        expect(wrapper.state().channel).toBe('')
    })
})
