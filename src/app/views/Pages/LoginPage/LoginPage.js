import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import { grey600 } from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import { Link } from 'react-router';

import './LoginPage.css';

const LoginPage = () => {
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

  return (
    <div>
      <div className="login-container">
        <h2 className="text-center">React Stack App</h2>
        <p className="login-title text-center">React Stack Libraries - Material UI</p><br />
        <Paper className="login-view">
          <div className="login-title text-center">Sign in to start your session</div>
          <form>
            <TextField
              hintText="E-mail"
              floatingLabelText="E-mail"
              fullWidth
            />
            <TextField
              hintText="Password"
              floatingLabelText="Password"
              fullWidth
              type="password"
            />

            <div style={{ paddingTop: 20 }}>
              <Checkbox
                label="Remember me"
                style={styles.checkRemember.style}
                labelStyle={styles.checkRemember.labelStyle}
                iconStyle={styles.checkRemember.iconStyle}
              />

              <Link to="/">
                <RaisedButton
                  label="Login"
                  primary
                  className="login-button"
                />
              </Link>
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
    </div>
  );
};

export default LoginPage;
