import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// document.addEventListener('DOMContentLoaded', () => {
//   const body = document.getElementById('root');
//   const hello = document.createElement('div');
//   hello.textContent = 'hello';

//   body.appendChild(hello);
// })
