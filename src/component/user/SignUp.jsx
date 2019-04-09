import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SignLogo, Container, SignUpForm } from './SignForm.jsx';

const SignUp = props => {
  return (
    <>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignUpForm />
      </Container>
    </>
  );
};

export default SignUp;
