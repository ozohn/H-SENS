import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from '../component/presenter/layouts/Main';
import SignIn from '../component/presenter/layouts/SignIn';
import SignUp from '../component/presenter/layouts/SignUp';
import UserPage from '../component/presenter/layouts/User';
import Searched from '../component/presenter/layouts/Searched';
import UserEditor from '../component/container/user/UserEditor';
import WorksEditor from '../component/container/work/WorksEditor';

const AppPath = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/work/:workid" exact component={MainPage} />
      <Route path="/search" component={Searched} />
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
