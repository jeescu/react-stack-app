// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// Actions
export const loginRequest = data => ({ type: LOGIN_REQUEST, payload: data });
export const loginSuccess = data => ({ type: LOGIN_SUCCESS, payload: data });
export const loginFailure = data => ({ type: LOGIN_FAILURE, payload: data });

export const logoutRequest = data => ({ type: LOGOUT_REQUEST, payload: data });
export const logoutSuccess = data => ({ type: LOGOUT_SUCCESS, payload: data });
