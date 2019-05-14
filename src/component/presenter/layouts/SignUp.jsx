import React from 'react';

import SignUpComponent from '../../container/signUp/SignUpComponent';
import AuthContainer from './AuthContainer';

const SignUp = () => {
  return (
    <AuthContainer>
      <SignUpComponent />
    </AuthContainer>
  );
};

export default SignUp;
