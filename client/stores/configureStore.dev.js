import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from './../middleware/promise-middleware'

const loggerMiddleware = createLogger();
const routerMiddlewareInst = routerMiddleware(browserHistory);


export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxThunk, promiseMiddleware, routerMiddlewareInst, loggerMiddleware),
      DevTools.instrument()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
