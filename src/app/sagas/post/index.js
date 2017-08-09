import { takeEvery } from 'redux-saga/effects';
import { addPostWorker } from './post.workers';
import { postsActions } from '../../states/posts';
/* eslint-disable import/prefer-default-export */
export function* addPostSaga() {
  yield takeEvery(postsActions.ADD_POST_REQUEST, addPostWorker);
}
