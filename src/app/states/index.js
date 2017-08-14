import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { postsReducer } from './posts';
import { postReducer } from './post';

export default combineReducers({
  auth: authReducer,
  posts: postsReducer,
  post: postReducer,
});
