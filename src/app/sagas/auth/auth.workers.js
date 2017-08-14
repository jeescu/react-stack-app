/* eslint-disable import/prefer-default-export */
import { browserHistory } from 'react-router';
import { put, call } from 'redux-saga/effects';
import localStorage from 'store';
import * as authApi from '../../../api/auth';
import { authActions } from '../../states/auth';

export function* loginRequestWorker(action) {
  try {
    const request = yield call(authApi.login, action.payload);
    yield put(authActions.loginSuccess(request));
    browserHistory.push('/dashboard');
  } catch (e) {
    yield put(authActions.loginFailure(e));
  }
}

export function* logoutRequestWorker(action) {
  try {
    const request = yield call(authApi.logout, action.payload);
    yield put(authActions.logoutSuccess(request));
    browserHistory.push('/login');
  } catch (e) {
    // error
  }
}
