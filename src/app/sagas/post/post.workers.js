/* eslint-disable import/prefer-default-export */
import { put, call } from 'redux-saga/effects';
import * as postApi from '../../../api/posts';
import { postsActions } from '../../states/posts';

export function* addPostWorker(action) {
  try {
    const request = yield call(postApi.addPost, action.payload);
    yield put(postsActions.addPostSuccess(request));
  } catch (e) {
    // error
  }
}
