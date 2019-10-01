import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux'
import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

const jsx = (
    <App />
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();
