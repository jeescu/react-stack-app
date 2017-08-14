import { takeEvery } from 'redux-saga/effects';
import * as authWorkers from './auth.workers';
import { authActions } from '../../states/auth';
/* eslint-disable import/prefer-default-export */
export function* authSaga() {
  yield takeEvery(authActions.LOGIN_REQUEST, authWorkers.loginRequestWorker);
  yield takeEvery(authActions.LOGOUT_REQUEST, authWorkers.logoutRequestWorker);
}
