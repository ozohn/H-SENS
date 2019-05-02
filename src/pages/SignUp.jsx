import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  WholeContainer,
  SignLogo,
  Container,
  SignUpForm,
} from '../component/user/SignForm';
import fetchData from '../component/fetchData';

const SignUp = () => {
  const [id, setId] = useState({ b: true, data: '' });
  const [pw, setPw] = useState({ b: true, data: '' });
  const [rePw, setRePw] = useState({ b: true });
  const [name, setName] = useState({ b: true, data: '' });
  const [bLoading, setBLoading] = useState(false);
  const [bCorrect, setBCorrect] = useState(true);

  const checkOverlap = async curVal => {
    const body = {
      userid: curVal,
    };
    const jsonHeader = {
      'Content-Type': 'application/json',
    };
    const checkOverlapUrl = `${process.env.REACT_APP_SERVER_URL}/users/checkid`;
    const res = await fetchData(
      checkOverlapUrl,
      'POST',
      jsonHeader,
      JSON.stringify(body),
    );
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
    return curVal.length > 0
      ? setName({ b: true, data: curVal })
      : setName({ b: false, data: curVal });
  };

  const submit = async e => {
    e.preventDefault();
    if (!(id.b && pw.b && name.b && rePw.b)) {
      setBCorrect(false);
      return;
    }
    setBLoading(true);
    const jsonHeader = {
      'Content-Type': 'application/json',
    };
    const body = {
      userid: id.data,
      password: pw.data,
      username: name.data,
    };
    const signUpUrl = `${process.env.REACT_APP_SERVER_URL}/users/signup`;
    const res = await fetchData(signUpUrl, 'POST', jsonHeader, JSON.stringify(body));
    if (res.error) {
      throw res.error;
    } else {
      window.localStorage.token = res.token;
      window.location.replace(`${process.env.REACT_APP_CLIENT_URL}`);
    }
  };

  return (
    <WholeContainer>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignUpForm
          Fns={{ checkId, checkPw, checkRePw, checkName, submit }}
          Datas={{ id, pw, rePw, name, bLoading, bCorrect }}
        />
      </Container>
    </WholeContainer>
  );
};

export default SignUp;
