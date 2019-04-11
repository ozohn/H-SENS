import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { SignLogo, Container, SignUpForm } from './SignForm.jsx';
import useFetch from '../fetch.js';

const SignUp = props => {
  const [id, setId] = useState({ b: true, data: '' });
  const [pw, setPw] = useState({ b: true, data: '' });
  const [rePw, setRePw] = useState({ b: true });
  const [name, setName] = useState({ b: false, data: '' });
  const [submitBtn, setSubmitBtn] = useState({
    bLoading: false,
    bCorrect: true,
  });

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
    if (curVal.length >= 0) return setName({ b: true, data: curVal });
    setName({ b: false, data: curVal });
  };

  let submit = async e => {
    if (!(id.b && pw.b && name.b && rePw.b)) {
      setSubmitBtn({ bLoading: false, bCorrect: false });
      return;
    }
    setSubmitBtn({ bLoading: true, bCorrect: true });
    const jsonHeader = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
    const body = {
      userid: id.data,
      password: pw.data,
      username: name.data,
    };
    const signUpUrl = 'https://hea-b.herokuapp.com/users/signup'
    const res = await useFetch(
      signUpUrl,
      'POST',
      jsonHeader,
      JSON.stringify(body)
    );
    console.log(res);
    // window.location.replace('http://localhost:3000');
  };

  return (
    <>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignUpForm
          Fns={{ checkId, checkPw, checkRePw, checkName, submit }}
          Datas={{ id, pw, rePw, name, submitBtn }}
        />
      </Container>
    </>
  );
};

export default SignUp;
