import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composedEnhancers);

  if (module.hot && process.env.NODE_ENV === 'development') {
    // Enable Webpack hot module replacement for reducers
    /* eslint-disable global-require */
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;

      store.replaceReducer(nextRootReducer);
    });
    /* eslint-enable global-require */
  }

  return store;
}
