import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import SignInForm from './SignInForm';
import SignLogo from '../SignLogo';
import InputContainer from '../InputContainer';
import { SIGN_IN, LOCAL_SIGN_IN } from './SignInQueries';

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
  const localSignIn = useMutation(LOCAL_SIGN_IN);

  const submit = async e => {
    e.preventDefault();
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
    const token = data.signIn;
    setAction({ ...action, loading: false, text: 'Success' });
    localSignIn({ variables: { token } });
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
