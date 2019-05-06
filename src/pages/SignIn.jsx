import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SignInForm,
  SignLogo,
  Container,
  WholeContainer,
} from '../component/user/SignForm';
import fetchData from '../component/fetchData';

const SignIn = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [bLoading, setbLoading] = useState(null);
  const [bCorrect, setBCorrect] = useState(true);

  const getId = e => {
    const curVal = e.target.value;
    setId(curVal);
  };

  const getPw = e => {
    const curVal = e.target.value;
    setPw(curVal);
  };

  const submit = async e => {
    e.preventDefault();
    setbLoading(true);
    const jsonHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const userData = {
      userid: id,
      password: pw,
    };
    const signInUrl = `${process.env.REACT_APP_SERVER_URL}/users/signin`;
    const res = await fetchData(signInUrl, 'POST', jsonHeader, JSON.stringify(userData));
    if (typeof res === 'string') {
      setbLoading(null);
      setBCorrect(false);
    } else {
      window.localStorage.token = res.token;
      window.location.replace(`${process.env.REACT_APP_CLIENT_URL}`);
    }
  };

  return (
    <WholeContainer>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignInForm
          Fns={{ getId, getPw, submit }}
          Datas={{ id, pw, bLoading, bCorrect }}
        />
      </Container>
    </WholeContainer>
  );
};

export default SignIn;
