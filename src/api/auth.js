/* eslint-disable import/prefer-default-export */
import localStorage from 'store';

export const login = ({ username, password }) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (username === 'user' && password === 'abc123') {
      const fakeUserData = { username, password };
      fakeUserData.id = Math.random().toString(36).substr(2, 14);

      // add to local storage
      localStorage.set('rsa-user', btoa(JSON.stringify(fakeUserData)));
      resolve(fakeUserData);
    } else {
      reject('Not found user');
    }
  }, 1e3);
});

export const logout = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    // remove from to local storage
    localStorage.remove('rsa-user');
    resolve();
  }, 200);
});
