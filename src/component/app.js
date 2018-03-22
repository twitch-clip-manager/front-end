import React from 'react';
import Content from './content/content';
import Landing from './landing/landing';
import {Provider} from 'react-redux';
import createStore from '../lib/app-create-store';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

const store = createStore();

export default class App extends React.Component {
    componentWillMount() {
        if(localStorage.token)
            store.dispatch({type: 'TOKEN_SET', payload: localStorage.token});
    }

    render() {
        let {token} = store.getState();

        return (
            <main className="application">
                <Provider store={store}>
                    <BrowserRouter>
                        <React.Fragment>
                            <Route exact path="/" component={Content}/>
                            <Route exact path="/signup" component={Content}/>
                            <Route exact path="/signin" component={Content}/>
                            <Route exact path="/landing" component={Landing}/>
                   
                            <Route exact path="/" component={() =>
                                token
                                    ? <Landing token={token}/>
                                    : <Redirect to="/signup"/>}
                            />
                        </React.Fragment>
                    </BrowserRouter>
                </Provider>
            </main>
        );
    }
}