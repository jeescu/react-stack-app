import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootState from '../states';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootState,
    initialState,
    applyMiddleware(
      sagaMiddleware,
    ),
  );
  
  sagaMiddleware.run(rootSaga);  
  return store;
}
