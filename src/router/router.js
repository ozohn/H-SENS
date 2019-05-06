import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserPage from '../pages/User';
import Searched from '../pages/Searched';
import UserSetting from '../pages/UserSetting';
import App from '../App';

const Path = () => {
  const hasToken = !!window.localStorage.token;
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/signin" render={() => (hasToken ? <App /> : <SignIn />)} />
      <Route path="/signup" render={() => (hasToken ? <App /> : <SignUp />)} />
      <Route path="/user" component={UserPage} />
      <Route path="/searched" component={Searched} />
      <Route
        path="/usersetting"
        render={({ location }) => {
          console.log(location.query);
          return location.query ? <UserSetting {...location.query} /> : <UserPage />;
        }}
      />
    </Router>
  );
};

export default Path;
