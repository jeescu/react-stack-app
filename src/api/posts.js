/* eslint-disable import/prefer-default-export */

export const addPost = data => new Promise((resolve, reject) => {
  setTimeout(() => {
    const newFakeData = { ...data };
    
    newFakeData.id = Math.random().toString(36).substr(2, 14);
    resolve(newFakeData);
  }, 500);
});
