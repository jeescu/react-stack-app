import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from '../views/Home/Home';

export default () => (
  <Router>
    <Route exact path="/" component={Home}>
      {/* <IndexRoute component={Posts} />  */}
      {/* <Route path="post" component={Post} /> */}
    </Route>
  </Router>
);
