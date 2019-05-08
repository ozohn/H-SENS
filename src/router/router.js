import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserPage from '../pages/User';
import Searched from '../pages/Searched';
import UserSetting from '../pages/UserSetting';
import { MainProvider } from '../context/main/mainContext';
import { CreatorProvider } from '../context/creator/creatorContext';
import App from '../App';
import { WorkProvider } from '../context/work/workContext';

const Path = () => {
  const hasToken = !!window.localStorage.token;
  return (
    <Router>
      <MainProvider>
        <Route path="/" exact component={App} />
        <CreatorProvider>
          <WorkProvider>
            <Route path="/user" component={UserPage} />
          </WorkProvider>
          <Route path="/usersetting" component={UserSetting} />
        </CreatorProvider>
      </MainProvider>
      <Route path="/signin" render={() => (hasToken ? <App /> : <SignIn />)} />
      <Route path="/signup" render={() => (hasToken ? <App /> : <SignUp />)} />
      <Route path="/searched" component={Searched} />
    </Router>
  );
};

export default Path;
