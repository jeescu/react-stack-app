import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import configureStore from './app/store';
import Routes from './app/routes/routes';
import registerServiceWorker from './registerServiceWorker';
import { defaultTheme } from './config/Themes';
import auth from './app/utils/auth';

import './index.css';

const store = configureStore();
const requireAuth = auth(store.dispatch);
// Add initial dispatched here
// store.dispatch(actionCreator)


// Init scripts here.
registerServiceWorker();
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={defaultTheme}>
    <Provider store={store}>
      <Routes requireAuth={requireAuth} />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));
