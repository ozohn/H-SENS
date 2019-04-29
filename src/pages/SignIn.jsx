import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignInForm, SignNav, SignLogo, Container } from '../component/user/SignForm';
import fetchData from '../component/fetchData';

const SignIn = () => {
  const [id, setId] = useState({ b: false, data: '' });
  const [pw, setPw] = useState({ b: false, data: '' });
  const [submitBtn, setSubmitBtn] = useState({
    bLoading: false,
    bCorrect: true,
  });

  const getId = e => {
    const curVal = e.target.value;
    setId({ b: true, data: curVal });
  };

  const getPw = e => {
    const curVal = e.target.value;
    setPw({ b: true, data: curVal });
  };

  const submit = async () => {
    setSubmitBtn({ bLoading: true, bCorrect: true });
    const jsonHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const userData = {
      userid: id.data,
      password: pw.data,
    };
    const signInUrl = `${process.env.REACT_APP_SERVER_URL}/users/signin`;
    const res = await fetchData(signInUrl, 'POST', jsonHeader, JSON.stringify(userData));
    window.localStorage.token = res.token;
    window.location.replace(`${process.env.REACT_APP_CLIENT_URL}`);
    if (res.error) {
      window.location.replace(`${process.env.REACT_APP_CLIENT_URL}`);
    } else {
      setSubmitBtn({ bLoading: false, bCorrect: false });
    }
  };

  return (
    <>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignInForm Fns={{ getId, getPw, submit }} Datas={{ id, pw, submitBtn }} />
        <SignNav />
      </Container>
    </>
  );
};

export default SignIn;
