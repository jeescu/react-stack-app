import initialState from '../initial';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from './auth.actions';

export default function (state = initialState.auth, action = null) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_SUCCESS:
      return {
        isAuthenticated: true,
        currentUser: action.payload,
        isLoading: false,
      };

    case LOGIN_FAILURE:
      return {
        isAuthenticated: false,
        currentUser: null,
        isLoading: false,
      };

    case LOGOUT_SUCCESS:
      return {
        isAuthenticated: false,
        currentUser: null,
        isLoading: false,
      };

    default:
      return { ...state };
  }
}
