import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';
import configureStore from './stores/configureStore';
import Routes from './routes';
import initialize from './init';

const store = configureStore();

export const syncedHistory = syncHistoryWithStore(browserHistory, store);

initialize();

ReactDOM.render(
  <Root store={store}>
    <Routes history={syncedHistory} />
  </Root>,
  document.getElementById('app')
);
