import React from 'react';
import { Link } from 'react-router-dom';

import AuthInput from '../../presenter/forms/AuthInput';
import SignUpBtn from '../../presenter/buttons/SignUpBtn';
import SignInSubmitBtn from './SignInSubmitBtn';

const SignInForm = ({ Fns, state }) => (
  <form>
    <AuthInput placeholder="ID" onChange={Fns.getId} />
    <AuthInput type="password" placeholder="PW" onChange={Fns.getPw} />
    <SignUpBtn as={Link} to="/signup">
      Sign Up
    </SignUpBtn>
    <SignInSubmitBtn
      submit={Fns.submit}
      bLoading={state.bLoading}
      bCorrect={state.bCorrect}
    />
  </form>
);

export default SignInForm;
