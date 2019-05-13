import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import UserPage from '../pages/User';
import Searched from '../pages/Searched';
import UserEditor from '../pages/UserEditor';
import WorksEditor from '../pages/WorksEditor';
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
            <Route path="/workeditor" render={props => <WorksEditor {...props} />} />
          </WorkProvider>
          <Route path="/usereditor" component={UserEditor} />
        </CreatorProvider>
        <Route path="/searched" component={Searched} />
      </MainProvider>
      <Route path="/signin" render={() => (hasToken ? <App /> : <SignIn />)} />
      <Route path="/signup" render={() => (hasToken ? <App /> : <SignUp />)} />
    </Router>
  );
};

export default Path;
