import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { blue600, white } from 'material-ui/styles/colors';
/* eslint-disable import/prefer-default-export */
export const defaultTheme = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: blue600,
  },
  drawer: {
    width: 260,
    color: white,
  },
  raisedButton: {
    primaryColor: blue600,
  },
});
