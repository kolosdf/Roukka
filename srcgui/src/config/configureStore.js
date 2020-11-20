import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore() {
  return createStore(
    combineReducers({
      ...reducers
    }),
    composeWithDevTools(applyMiddleware(thunk, logger))
  );
}
