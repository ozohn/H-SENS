import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../component/presenter/layout/SignIn';
import SignUp from '../component/presenter/layout/SignUp';
import UserPage from '../component/presenter/layout/User';
import Searched from '../component/presenter/layout/Searched';
import UserEditor from '../component/presenter/layout/UserEditor';
import WorksEditor from '../component/presenter/layout/WorksEditor';
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
