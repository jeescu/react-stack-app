import React from 'react';
import { browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const NotFoundPage = () => (
  <div>
    <div className="text-center" style={{ marginTop: '24%' }}>
      <h3>Page Not Found</h3>
      <RaisedButton label="Go to Homepage" onClick={() => browserHistory.push('/')} />
    </div>
  </div>
);

export default NotFoundPage;
