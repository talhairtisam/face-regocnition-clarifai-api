import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { imageReducer } from './redux/reducer';

const middleware = [logger];

const store = createStore(imageReducer,applyMiddleware(...middleware))




ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
