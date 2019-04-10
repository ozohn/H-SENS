import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SignLogo, Container, SignUpForm } from './SignForm.jsx';

const SignUp = props => {
  const [id, setId] = useState({ b: true, data: '' });
  const [pw, setPw] = useState({ b: true, data: '' });
  const [rePw, setRePw] = useState({ b: true });
  const [name, setName] = useState({ b: true, data: ''});

  let checkId = e => {
    let curVal = e.target.value;
    const idRegExp = /^[A-Za-z0-9]{6,12}$/;
    setId({ b: idRegExp.test(curVal), data: curVal });
  };

  let checkPw = e => {
    let curVal = e.target.value;
    const pwRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    setPw({ b: pwRegExp.test(curVal), data: curVal });
  };

  let checkRePw = e => {
    let curVal = e.target.value;
    if (pw.data === curVal) return setRePw({ b: true });
    setRePw({ b: false });
  };

  let checkName = e => {
    let curVal = e.target.value;
    if(curVal.length >= 0) return setName({b: true, data:curVal})
    setName({ b: false, data:curVal })
  }

  return (
    <>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignUpForm
          Fns={{ checkId, checkPw, checkRePw, checkName }}
          Datas={{ id, pw, rePw, name }}
        />
      </Container>
    </>
  );
};

export default SignUp;
