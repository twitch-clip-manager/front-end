import React from 'react'
import {configure, shallow, mount}  from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux';
import createStore from '../src/lib/app-create-store';
import Form from '../src/component/form/form'
import ClipItem from '../src/component/clip/clip'
require('jest')

configure({adapter: new Adapter()});

// describe('form', () => {
//     test('form starting state', () => {
//         let wrapper = mount(<Provider store={createStore()}><Form /></Provider>)
//         console.log(wrapper.state())
//         wrapper.setState({game: 'overwatch', channel: ''})
//         console.log(wrapper.state())
//         expect(wrapper.state().game).toEqual('overwatch')
//         expect(wrapper.state().channel).toBe('')
//     })
// })

describe('', () => {
    test('', () => {
        expect(true).toBe(true)
    })
    // test('', () => {
    //     let mockClips = [{broadcaster: {display_name: 'kappa'}}]
    //     let clipWrapper = mount(<Provider store={createStore()}><ClipItem clips={mockClips} thumbnails={[4]} /></Provider>)
    //     clipWrapper.setState({counter: 0})
    //     console.log(clipWrapper)
    //     clipWrapper.setProps({clips: ['test']})
    //     clipWrapper.setProps({thumbnails: ['test']})
    //     console.log('props',clipWrapper.props)
    //     expect(clipWrapper.state().counter).toEqual(0)
    // })
    // test('', () => {
    //     let mockClips2 = [{broadcaster: {display_name: 'kappa'}}]
    //     let mockThumbnails2 = [210550942]
    //     let clipWrapper2 = mount(<Provider store={createStore()}><ClipItem clips={mockClips2} thumbnails={mockThumbnails2} /></Provider>)
    //     clipWrapper2.setState({counter: 2})
    //     console.log(clipWrapper2.html())
    //     // console.log(clipWrapper2.find('video'))
    //     clipWrapper2.find('video').simulate('ended');
    //     // expect(clipWrapper2.handleSlide).toHaveBeenCalled()
    //     expect(clipWrapper2.state().counter).toEqual(0)
    // })
})