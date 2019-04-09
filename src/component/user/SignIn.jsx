import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SignInForm, SignNav, SignLogo, Container, SetCenter } from './SignForm.jsx';

const SignIn = props => {
  return (
    <>
      <SignLogo as={Link} to='/' />
      <Container>
        <SetCenter>
          <SignInForm />
          <SignNav />
        </SetCenter>
      </Container>
    </>
  );
};

export default SignIn;
