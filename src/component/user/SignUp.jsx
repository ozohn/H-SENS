import React, { setState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SignLogo, Container, SignUpForm } from './SignForm.jsx';

const SignUp = props => {
  const [bId, setbId] = setState(false);

  const checkId = (e) => {
    let curVal = e.value
    const idRegExp = /^[A-Za-z0-9]{6,12}$/
    setbId(idRegExp.test(curVal))
    return bId
  }

  return (
    <>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignUpForm checkId={checkId} />
      </Container>
    </>
  );
};

export default SignUp;