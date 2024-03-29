import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './createStore';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';

render (
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);