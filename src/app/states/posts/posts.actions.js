// Action Types
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';

// Actions
export const addPostRequest = data => ({ type: ADD_POST_REQUEST, payload: data });
export const addPostSuccess = data => ({ type: ADD_POST_SUCCESS, payload: data });

// Action Creators
export function addPost(post) {
  // request actions are handled by saga
  return addPostRequest(post);
}
