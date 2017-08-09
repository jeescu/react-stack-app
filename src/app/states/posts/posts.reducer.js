import initialState from '../initial';
import {
  ADD_POST_SUCCESS,
} from './posts.actions';

export default function (state = initialState.posts, action = null) {
  switch (action.type) {
    case ADD_POST_SUCCESS:
      return [
        ...state,
        action.payload,
      ];

    default:
      return [...state];
  }
}
