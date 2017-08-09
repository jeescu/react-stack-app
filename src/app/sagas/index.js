import { fork, all } from 'redux-saga/effects';

import { addPostSaga } from './post';

export default function* root() {
  yield all([
    fork(addPostSaga),
  ]);
}
