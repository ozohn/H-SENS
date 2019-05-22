import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../component/presenter/layouts/SignIn';
import SignUp from '../component/presenter/layouts/SignUp';
import UserPage from '../component/presenter/layouts/User';
import Searched from '../component/presenter/layouts/Searched';
import UserEditor from '../component/container/user/UserEditor';
import WorksEditor from '../component/container/work/WorksEditor';
import { MainProvider } from '../context/mainContext';
import App from '../App';

const Path = () => {
  const hasToken = !!window.localStorage.token;
  return (
    <Router>
      <MainProvider>
        <Route path="/" exact component={App} />
        <Route path="/user" component={UserPage} />
        <Route path="/workeditor" render={props => <WorksEditor {...props} />} />
        <Route path="/searchedUser" component={UserPage} />
        <Route path="/usereditor" component={UserEditor} />
        <Route path="/searched" component={Searched} />
      </MainProvider>

      <Route path="/signin" render={() => (hasToken ? <App /> : <SignIn />)} />
      <Route path="/signup" render={() => (hasToken ? <App /> : <SignUp />)} />
    </Router>
  );
};

export default Path;
