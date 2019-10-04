import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/ConfigureStore'
import 'bootstrap/dist/css/bootstrap.css';
import './style/style.css'
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore()


const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();
