import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './containers/App';

// import store, { history } from './store';
import configureStore, { history } from './store';

// const store = configureStore();

const root = document.getElementById('app');

const store = configureStore();

const renderApp = component => (
  <Provider store={store}>
    <ConnectedRouter history={history}>{component}</ConnectedRouter>
  </Provider>
);

ReactDOM.render(renderApp(<App />), root);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./containers/App', () => {
    /* eslint-disable global-require */
    const NextApp = require('./containers/App').default;

    ReactDOM.render(renderApp(<NextApp />), root);
  });
}
