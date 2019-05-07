import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserPage from '../pages/User';
import Searched from '../pages/Searched';
import UserSetting from '../pages/UserSetting';
import { Provider } from '../context/creator/creatorContext';
import App from '../App';

const Path = () => {
  const hasToken = !!window.localStorage.token;
  return (
    <Router>
      <Route path="/" exact component={App} />
      <Route path="/signin" render={() => (hasToken ? <App /> : <SignIn />)} />
      <Route path="/signup" render={() => (hasToken ? <App /> : <SignUp />)} />
      <Route path="/searched" component={Searched} />
      <Provider>
        <Route path="/user" component={UserPage} />
        <Route path="/usersetting" component={UserSetting} />
      </Provider>
    </Router>
  );
};

export default Path;
