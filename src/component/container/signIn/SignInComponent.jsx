import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import SignInForm from './SignInForm';
import SignLogo from '../../presenter/icons/SignLogo';
import InputContainer from '../../presenter/layouts/InputContainer';
import SIGN_IN from './SignInQueries';

const SignInComponent = () => {
  const [id, setId] = useState(null);
  const [pw, setPw] = useState(null);
  const [action, setAction] = useState({ text: 'sign in', loading: false });

  const getId = e => {
    const curVal = e.target.value;
    setId(curVal);
  };

  const getPw = e => {
    const curVal = e.target.value;
    setPw(curVal);
  };

  const signIn = useMutation(SIGN_IN, {
    variables: {
      userid: id,
      password: pw,
    },
  });

  const submit = async e => {
    e.preventDefault();
    console.log(signIn);
    return;
    setAction({ ...action, loading: true });
    if (id === null || pw === null) {
      setAction({ ...action, loading: false, text: 'Please check blank' });
      return;
    }
    const { data } = await signIn();
    if (data.signIn === 'notFound') {
      setAction({ ...action, loading: false, text: 'Please check id or password' });
      return;
    }
    window.localStorage.token = data.signIn;
    setAction({ ...action, loading: false, text: 'Success' });
    window.location.replace(`${process.env.REACT_APP_CLIENT_URL}`);
  };

  return (
    <>
      <SignLogo as={Link} to="/" />
      <InputContainer>
        <SignInForm Fns={{ getId, getPw, submit }} action={action} />
      </InputContainer>
    </>
  );
};

export default SignInComponent;
