# React Stack Application
> Starter app, with some collections of react libraries.

See [DEMO](https://jeescu.github.io/react-stack-app/)

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

![alt Screenshot](https://raw.githubusercontent.com/jeescu/react-stack-app/master/public/rsa-sc.png)
Layouts are inspired from [rafael's](https://github.com/rafaelhz) [admin template](https://github.com/rafaelhz/react-material-admin-template). Star it!

__NOTE:__
- The **API** is just simulated (faked).
- Use credential, username: `user` password: `abc123`.
- (External) Github Page has issues when navigating to some routes except for the specified homepage ([/react-stack-app/](https://jeescu.github.io/react-stack-app/)).

### React libraries
- [Redux](https://github.com/reactjs/redux/)
- [Redux-saga](https://github.com/redux-saga/redux-saga)
- [React-loadable](https://github.com/thejameskyle/react-loadable)
- [Recompose](https://github.com/acdlite/recompose)
- [React-bootstrap](https://github.com/react-bootstrap/react-bootstrap)
- [Material-UI](https://github.com/callemall/material-ui)
- [Reselect](https://github.com/reactjs/reselect/)

See [package.json](https://github.com/jeescu/react-stack-app/blob/master/package.json) for more dependencies.

### Project Structure
```
├── build                           # App build for production
├── src                             # App source code
│   ├── api                         # API to web services
│   ├── config                      # Configuration settings
│   ├── app                         # Your main app
│   │   ├── views                   # UIs, components
│   │   │   ├── Components          # Reusable components across views
│   │   │   ├── Layouts             # Reusable layouts for pages / containers
│   │   │   └── Pages               # Containers and page views
│   │   ├── states                  # Store states structured the same way from object state
│   │   │   ├── auth                # A state
│   │   │   │   ├── auth.actions.js # A state should have actions
│   │   │   │   ├── auth.reducer.js # State's reducer.
│   │   │   │   └── index.js        # Entry point for actions and reducer.
│   │   │   ├── initial.js          # Store's initial state, reducers can refer their initial states.
│   │   │   └── index.js            # States with combined reducers (actual store states), use for store.
│   │   ├── store                   # App redux store
│   │   │   ├── store.dev.js        # Store configured for development
│   │   │   └── index.js            # Store entry point
│   │   ├── routes                  # All App routes
│   │   └── utils                   # Your app related utilities
│   ├── utils                       # Your main (global) src utilities
│   ├── index.js                    # App (client) main entry point.
│   ├── index.html                  # Static html
```

#### `app/states/auth/index`
```
export authReducer from './auth.reducer';
export * authActions from './auth.actions';
```

#### `app/states/index`
```
import { combineReducers } from 'redux';
import { authReducer } from './user';

export default combineReducers({
  user: userReducer,
});
```

#### `app/states/initial.js`
```
export default {
  auth: {},
};
```
### Get the project!
1. Clone and install.
```bash
$ git@github.com:jeescu/react-stack-app.git
$ cd react-stack-app
$ npm install
```

2. Remove `.git`, update `package.json` and make it your own!
```bash
$ rm -rf .git
$ git init
```

3. Start the app.
```
$ npm start
```

