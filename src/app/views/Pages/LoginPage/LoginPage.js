import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { grey600 } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';
import { compose, setPropTypes, withProps, getContext, withStateHandlers, pure } from 'recompose';
import { connect } from 'react-redux';

import { authActions } from '../../../states/auth';

import './LoginPage.css';

const enhance = compose(
  // pass context as prop instead of defining ctxTypes statically and get from the 2nd arg.
  // The context from the <Provider /> component.
  // NOTE: We don't need this step if component is already wrapped with RR HoC
  getContext({ store: PropTypes.object }),
  // create new prop out of owner prop
  // NOTE: We don't need this step if component is already wrapped with RR HoC
  withProps(({ store }) => ({ storeState: store.getState() })),
  // create initial state with its handlers
  withStateHandlers(
    ({
      username = '',
      password = '',
    }) => ({ username, password }),
    ({
      handleUsernameChange: ({ username }) => value => ({
        username: value,
      }),
      handlePasswordChange: ({ password }) => value => ({
        password: value,
      }),
    }),
  ),
  setPropTypes({
    username: PropTypes.string,
    password: PropTypes.string,
    isLoading: PropTypes.bool,
    handleUsernameChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    store: PropTypes.object,
    storeState: PropTypes.object,
  }),
);

const LoginPage = ({
  username,
  password,
  isLoading,
  handleUsernameChange,
  handlePasswordChange,
  store,
  storeState,
}) => {
  const styles = {
    flatButton: {
      color: grey600,
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5,
      },
      labelStyle: {
        color: grey600,
      },
      iconStyle: {
        borderColor: grey600,
        fill: grey600,
      },
    },
  };

  const onSubmit = () => {
    store.dispatch(authActions.loginRequest({ username, password }));
  };

  return (
    <div className="login-container">
      <h2 className="text-center">React Stack App</h2>
      <p className="login-title text-center">React Stack Libraries - Material UI</p><br />
      {storeState.auth.isLoading && <h5 className="text-center">Logging in...</h5>}
      <Paper className="login-view">
        <div className="login-title text-center">Sign in to start your session</div>
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
          <TextField
            hintText="E-mail"
            floatingLabelText="E-mail"
            fullWidth
            onChange={e => handleUsernameChange(e.target.value)}
            value={username}
          />
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            fullWidth
            type="password"
            onChange={e => handlePasswordChange(e.target.value)}
            value={password}
          />

          <div style={{ paddingTop: 20 }}>
            <Checkbox
              label="Remember me"
              style={styles.checkRemember.style}
              labelStyle={styles.checkRemember.labelStyle}
              iconStyle={styles.checkRemember.iconStyle}
            />

            <RaisedButton
              label="Login"
              primary
              type="submit"
              className="login-button"
            />
          </div>
        </form>

        <div style={{ display: 'inline-block', paddingTop: 30 }}>
          <FlatButton
            label="Register"
            href="/"
            style={styles.flatButton}
            icon={<PersonAdd />}
          />

          <FlatButton
            label="Forgot Password?"
            href="/"
            style={styles.flatButton}
            icon={<Help />}
          />
        </div>
      </Paper>
    </div>
  );
};

function mapState({ auth }) {
  return { auth };
}

/**
 * NOTE: Generally without using RR HoC `connect` and state mapping,
 * this login page is just completely a recompose-wrapped dumb component.

 * recompose is not ideally meant to be mixed with your smart components
 * (use class-based, because you might need lifecycle hooks here other than state mngmt)
 * use recompose for dumb, props-dependent, pure function components.  
 */

// Anyway, we just created a smart, pure function component using HoC's.

export default connect(mapState)(pure(enhance(LoginPage)));
