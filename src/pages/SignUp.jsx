import React, { useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { SignLogo, Container, SignUpForm } from '../component/user/SignForm.jsx';
import useFetch from '../component/fetch.js';

const SignUp = props => {
  const [id, setId] = useState({ b: true, data: '' });
  const [pw, setPw] = useState({ b: true, data: '' });
  const [rePw, setRePw] = useState({ b: true });
  const [name, setName] = useState({ b: false, data: '' });
  const [submitBtn, setSubmitBtn] = useState({ bLoading: false, bCorrect: true });

  let checkId = async e => {
    let curVal = e.target.value;
    const idRegExp = /^[A-Za-z0-9]{6,12}$/;
    if (!idRegExp.test(curVal)) {
      setId({ b: idRegExp.test(curVal), data: curVal });
    } else {
      checkOverlap(curVal);
    }
  };

  let checkOverlap = async curVal => {
    const body = {
      userid: curVal
    };
    const jsonHeader = {
      'Content-Type': 'application/json'
    };
    const checkOverlapUrl = `${process.env.REACT_APP_SERVER_URL}/users/checkid`;
    const res = await useFetch(checkOverlapUrl, 'POST', jsonHeader, JSON.stringify(body));
    if (res.message === 'OK') {
      setId({ b: true, data: curVal });
    } else {
      setId({ b: false, data: curVal });
    }
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
      'Content-Type': 'application/json'
    };
    const body = {
      userid: id.data,
      password: pw.data,
      username: name.data
    };
    const signUpUrl = `${process.env.REACT_APP_SERVER_URL}/users/signup`;
    const res = await useFetch(signUpUrl, 'POST', jsonHeader, JSON.stringify(body));
    if (res.error) throw res.error;
    window.localStorage.token = res.token;
    window.location.replace(`${process.env.REACT_APP_CLIENT_URL}`);
  };

  return (
    <>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignUpForm
          Fns={{ checkId, checkPw, checkRePw, checkName, submit, checkOverlap }}
          Datas={{ id, pw, rePw, name, submitBtn }}
        />
      </Container>
    </>
  );
};

export default SignUp;
