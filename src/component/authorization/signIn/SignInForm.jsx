import React from 'react';
import { Link } from 'react-router-dom';

import AuthInput from '../AuthInput';
import SignUpBtn from '../SignUpBtn';
import SignInSubmitBtn from './SignInSubmitBtn';

const SignInForm = ({ Fns, action }) => (
  <form>
    <AuthInput placeholder="ID" onChange={Fns.getId} />
    <AuthInput type="password" placeholder="PW" onChange={Fns.getPw} />
    <SignUpBtn as={Link} to="/signup">
      Sign Up
    </SignUpBtn>
    <SignInSubmitBtn submit={Fns.submit} action={action} />
  </form>
);

export default SignInForm;
