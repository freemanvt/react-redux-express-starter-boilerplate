import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from '../reducers';
import ReduxThunk from 'redux-thunk'
import promiseMiddleware from './../middleware/promise-middleware'


const routerMiddlewareInst = routerMiddleware(browserHistory);

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk, promiseMiddleware, routerMiddlewareInst)
  );
}
