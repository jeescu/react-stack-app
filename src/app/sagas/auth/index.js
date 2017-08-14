import { takeEvery } from 'redux-saga/effects';
import { loginRequestWorker } from './auth.workers';
import { authActions } from '../../states/auth';
/* eslint-disable import/prefer-default-export */
export function* authSaga() {
  yield takeEvery(authActions.LOGIN_REQUEST, loginRequestWorker);
}
