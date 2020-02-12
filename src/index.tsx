import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppBar from './AppBar'
import koma4 from './data/koma4.json'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppBar />, document.getElementById('appbar'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
