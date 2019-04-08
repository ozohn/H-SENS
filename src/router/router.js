import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../component/user/SignIn.jsx';
// import SignUp from '../component/user/SignUp.jsx';
import App from '../App.js';

const Path = props => {
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/signin" component={SignIn} />
      {/* <Route path="/signup" component={SignUp} /> */}
    </Router>
  );
};

export default Path;
