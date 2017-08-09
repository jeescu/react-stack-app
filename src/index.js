import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './app/store';
import Routes from './app/routes/routes';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const store = configureStore();
// Add initial dispatched here
// store.dispatch(actionCreator)

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
