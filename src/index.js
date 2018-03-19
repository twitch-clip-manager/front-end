import React from 'react';
import ReactRouter from 'react-router';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BasicExample from './BasicExample'






ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
