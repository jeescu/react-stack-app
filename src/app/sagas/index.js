import { fork } from 'redux-saga/effects';

import { addPostSaga } from './post';

export default function* root() {
  yield [
    fork(addPostSaga),
  ];
}
