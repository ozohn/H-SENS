import React, { useState } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { SignLogo, Container, SignUpForm } from '../component/user/SignForm';
import useFetch from '../component/fetch';

const SignUp = () => {
  const [id, setId] = useState({ b: true, data: '' });
  const [pw, setPw] = useState({ b: true, data: '' });
  const [rePw, setRePw] = useState({ b: true });
  const [name, setName] = useState({ b: false, data: '' });
  const [submitBtn, setSubmitBtn] = useState({ bLoading: false, bCorrect: true });

  const checkOverlap = async curVal => {
    const body = {
      userid: curVal,
    };
    const jsonHeader = {
      'Content-Type': 'application/json',
    };
    const checkOverlapUrl = `${process.env.REACT_APP_SERVER_URL}/users/checkid`;
    const res = await useFetch(checkOverlapUrl, 'POST', jsonHeader, JSON.stringify(body));
    if (res.message === 'OK') {
      setId({ b: true, data: curVal });
    } else {
      setId({ b: false, data: curVal });
    }
  };

  const checkId = async e => {
    const curVal = e.target.value;
    const idRegExp = /^[A-Za-z0-9]{6,12}$/;
    if (!idRegExp.test(curVal)) {
      setId({ b: idRegExp.test(curVal), data: curVal });
    } else {
      checkOverlap(curVal);
    }
  };

  const checkPw = e => {
    const curVal = e.target.value;
    const pwRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    setPw({ b: pwRegExp.test(curVal), data: curVal });
  };

  const checkRePw = e => {
    const curVal = e.target.value;
    return pw.data === curVal ? setRePw({ b: true }) : setRePw({ b: false });
  };

  const checkName = e => {
    const curVal = e.target.value;
    return curVal.length >= 0
      ? setName({ b: true, data: curVal })
      : setName({ b: false, data: curVal });
  };

  const submit = async () => {
    if (!(id.b && pw.b && name.b && rePw.b)) {
      setSubmitBtn({ bLoading: false, bCorrect: false });
      return;
    }
    setSubmitBtn({ bLoading: true, bCorrect: true });
    const jsonHeader = {
      'Content-Type': 'application/json',
    };
    const body = {
      userid: id.data,
      password: pw.data,
      username: name.data,
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
