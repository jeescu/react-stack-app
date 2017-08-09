  /* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';

import rootState from '../states';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootState,
    initialState,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        reduxImmutableStateInvariant(),
        logger,
      ),
    ),
  );

  sagaMiddleware.run(rootSaga);
  return store;  
}
