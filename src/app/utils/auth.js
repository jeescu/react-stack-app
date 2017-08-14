import localStorage from 'store';
import { browserHistory } from 'react-router';
import { authActions } from '../states/auth';

export default dispatch => () => {
  const storedUser = localStorage.get('rsa-user');
  if (storedUser) {
    const currentUser = JSON.parse(atob(storedUser));
    dispatch(authActions.loginSuccess(currentUser));
  } else {
    browserHistory.push('/login');
  }
};
