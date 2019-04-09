import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SignInForm, SignNav, SignLogo, Container } from './SignForm.jsx';

const SignIn = props => {
  return (
    <>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignInForm />
        <SignNav />
      </Container>
    </>
  );
};

export default SignIn;
