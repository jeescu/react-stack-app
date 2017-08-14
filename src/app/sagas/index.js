import { fork, all } from 'redux-saga/effects';

import { authSaga } from './auth';
import { addPostSaga } from './post';

export default function* root() {
  yield all([
    fork(authSaga),
    fork(addPostSaga),
  ]);
}
