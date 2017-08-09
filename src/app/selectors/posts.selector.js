import { createSelector } from 'reselect';

const postsSelector = state => state.posts || [];

export const getPublicPost = createSelector(
  postsSelector,
  posts => posts.filter(post => post.public),
);

export const getPrivatePost = createSelector(
  postsSelector,
  posts => posts.filter(post => !post.public),
);
