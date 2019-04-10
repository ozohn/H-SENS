import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SignLogo, Container, SignUpForm } from './SignForm.jsx';

const SignUp = props => {
  const [bId, setbId] = useState(true);
  const [bPw, setbPw] = useState(true);
  const [bRePw, setbRePw] = useState(true);

  let checkId = (e) => {
    let curVal = e.target.value
    const idRegExp = /^[A-Za-z0-9]{6,12}$/
    setbId(idRegExp.test(curVal))
    return bId
  }

  let checkPw = (e) => {
    let curVal = e.target.value
    const pwRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    console.log(curVal);
    console.log(pwRegExp.test(curVal))
    setbPw(pwRegExp.test(curVal));
    return bPw
  }

  return (
    <>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignUpForm Fns={{checkId, checkPw}} Bs={{bId, bPw}} />
      </Container>
    </>
  );
};

export default SignUp;