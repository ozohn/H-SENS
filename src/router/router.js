import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../component/presenter/layouts/SignIn';
import SignUp from '../component/presenter/layouts/SignUp';
import UserPage from '../component/presenter/layouts/User';
import Searched from '../component/presenter/layouts/Searched';
import UserEditor from '../component/presenter/layouts/UserEditor';
import WorksEditor from '../component/presenter/layouts/WorksEditor';
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
            <Route path="/searchedUser" component={UserPage} />
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
