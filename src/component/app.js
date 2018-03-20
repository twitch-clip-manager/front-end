import React from 'react'
import Landing from './landing/landing'
import {Provider} from 'react-redux'
import createStore from '../lib/app-create-store'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Form from './form/form'
import Channel from './channel/channel-form'
const store = createStore()

export default class App extends React.Component {
//   componentWillMount() {
//     if(localStorage.token)
//       store.dispatch({type: 'TOKEN_SET', payload: localStorage.token})
//   }


  render() {
    let {token} = store.getState()

    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Form/>
              <Route exact path="/" component={Landing}/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}
