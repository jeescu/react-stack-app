import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Home from '../views/Home/Home';
import Posts from '../views/Posts/Posts';
import Post from '../views/Post/Post';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}>
        {/* <IndexRoute component={Posts} />  */}
      </Route>
      <Route path="/post" component={Posts} />
      <Route path="/post/:id" component={Post} />
    </div>
  </Router>
);
