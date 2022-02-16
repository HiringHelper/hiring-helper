import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import AppRouter from './AppRouter';

ReactDOM.render(
  <Provider store={store}>
    <AppRouter/>
  </Provider>,
  document.getElementById('root')
);
