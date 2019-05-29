import React from 'react';

import SignUpComponent from './SignUpComponent';
import AuthContainer from '../AuthContainer';

const SignUp = () => {
  return (
    <AuthContainer>
      <SignUpComponent />
    </AuthContainer>
  );
};

export default SignUp;
