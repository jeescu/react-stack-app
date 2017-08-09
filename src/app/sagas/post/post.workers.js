import { put } from 'redux-saga/effects';
import { postsActions } from '../../states/posts';
/* eslint-disable import/prefer-default-export */
export function* addPostWorker(action) {
  try {
    // const request = yield call(post.addPost, action.payload);
    yield put(postsActions.addPost({}));
  } catch (e) {
    // error
  }
}
