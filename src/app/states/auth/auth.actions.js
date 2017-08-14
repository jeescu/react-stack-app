// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Actions
export const loginRequest = data => ({ type: LOGIN_REQUEST, payload: data });
export const loginSuccess = data => ({ type: LOGIN_SUCCESS, payload: data });
export const loginFailure = data => ({ type: LOGIN_FAILURE, payload: data });
