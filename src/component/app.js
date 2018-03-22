import React from 'react'
import Landing from './landing/landing'
import {Provider} from 'react-redux'
import createStore from '../lib/app-create-store'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Form from './form/form'
const store = createStore()

export default class App extends React.Component {


  render() {
    let {token} = store.getState()

    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path="/" component={Landing}/>
              <Form/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    )
  }
}
