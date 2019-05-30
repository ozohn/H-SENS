import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../component/main/Main';
import SignIn from '../component/authorization/signIn/SignIn';
import SignUp from '../component/authorization/signUp/SignUp';
import UserPage from '../component/userPage/User';
import Searched from '../component/searched/Searched';
import UserEditor from '../component/userEditor/UserEditor';
import WorksEditor from '../component/workEditor/WorksEditor';

const AppPath = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/work/:workid" exact component={MainPage} />
      <Route path="/search" component={Searched} />
      {/* <Route path="/search/work" component={SignIn} /> */}
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/:userid" exact component={UserPage} />
      <Route path="/:userid/editor" exact component={UserEditor} />
      <Route path="/:userid/workeditor" exact component={WorksEditor} />

      <Route path="/:userid/:workid" exact component={UserPage} />
      <Route path="/:userid/:workid/workeditor" exact component={WorksEditor} />
    </Switch>
  </Router>
);

export default AppPath;
