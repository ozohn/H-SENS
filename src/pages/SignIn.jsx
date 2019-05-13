import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import {
  SignInForm,
  SignLogo,
  Container,
  WholeContainer,
} from '../component/user/SignForm';
import fetchData from '../component/fetchData';
import {
  signInReducer,
  setIdInput,
  setPasswordInput,
  setLoadingState,
  setCorrectState,
} from '../context/authorization/signInReducer';

const SignIn = () => {
  const [state, dispatch] = useReducer(signInReducer, { bCorrect: true });

  const getId = e => {
    const curVal = e.target.value;
    dispatch(setIdInput(curVal));
  };

  const getPw = e => {
    const curVal = e.target.value;
    dispatch(setPasswordInput(curVal));
  };

  const submit = async e => {
    e.preventDefault();
    dispatch(setLoadingState(true));
    const jsonHeader = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const userData = {
      userid: state.id,
      password: state.pw,
    };
    const signInUrl = `${process.env.REACT_APP_SERVER_URL}/users/signin`;
    const res = await fetchData(signInUrl, 'POST', jsonHeader, JSON.stringify(userData));
    if (typeof res === 'string') {
      dispatch(setLoadingState(null));
      dispatch(setCorrectState(false));
    } else {
      window.localStorage.token = res.token;
      window.location.replace(`${process.env.REACT_APP_CLIENT_URL}`);
    }
  };

  return (
    <WholeContainer>
      <SignLogo as={Link} to="/" />
      <Container>
        <SignInForm Fns={{ getId, getPw, submit }} state={state} />
      </Container>
    </WholeContainer>
  );
};

export default SignIn;
