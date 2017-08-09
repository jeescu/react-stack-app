import initialState from '../initial';
import {
  SELECT_POST,
} from './post.actions';

export default function (state = initialState.post, action = null) {
  switch (action.type) {
    case SELECT_POST:
      return {
        ...action.payload,
      };

    default:
      return { ...state };
  }
}
