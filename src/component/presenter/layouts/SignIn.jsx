import React from 'react';

import SignInComponent from '../../container/signIn/SignInComponent';
import AuthContainer from './AuthContainer';

const SignIn = () => {
  return (
    <AuthContainer>
      <SignInComponent />
    </AuthContainer>
  );
};

export default SignIn;
