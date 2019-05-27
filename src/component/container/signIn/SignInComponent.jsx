import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import SignInForm from './SignInForm';
import SignLogo from '../../presenter/icons/SignLogo';
import InputContainer from '../../presenter/layouts/InputContainer';
import SIGN_IN from './SignInQueries';

const SignInComponent = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
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
    setAction({ ...action, loading: true });
    const { data } = await signIn();
    window.localStorage.token = data.signIn;
    setAction({ ...action, loading: false });
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
