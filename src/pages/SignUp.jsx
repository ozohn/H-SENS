import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import {
  WholeContainer,
  SignLogo,
  Container,
  SignUpForm,
} from '../component/user/SignForm';
import fetchData from '../component/fetchData';
import {
  signUpReducer,
  setIdInput,
  setPasswordInput,
  setRePasswordInput,
  setNameInput,
  setCorrectState,
  setLoadingState,
} from '../context/authorization/signUpReducer';

const SignUp = () => {
  const [state, dispatch] = useReducer(signUpReducer, {
    id: { b: true },
    pw: { b: true },
    name: { b: true },
    rePw: true,
    bLoading: false,
    bCorrect: true,
  });

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
      dispatch(setIdInput({ b: true, data: curVal }));
    } else {
      dispatch(setIdInput({ b: false, data: curVal }));
    }
  };

  const checkId = async e => {
    const curVal = e.target.value;
    const idRegExp = /^[A-Za-z0-9]{6,12}$/;

    if (!idRegExp.test(curVal)) {
      dispatch(setIdInput({ b: idRegExp.test(curVal), data: curVal }));
    } else {
      checkOverlap(curVal);
    }
  };

  const checkPw = e => {
    const curVal = e.target.value;
    const pwRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    dispatch(setPasswordInput({ b: pwRegExp.test(curVal), data: curVal }));
  };

  const checkRePw = e => {
    const curVal = e.target.value;
    return state.pw.data === curVal
      ? dispatch(setRePasswordInput(true))
      : dispatch(setRePasswordInput(false));
  };

  const checkName = e => {
    const curVal = e.target.value;
    return curVal.length > 0
      ? dispatch(setNameInput({ b: true, data: curVal }))
      : dispatch(setNameInput({ b: false, data: curVal }));
  };

  const submit = async e => {
    e.preventDefault();
    if (!(state.id.b && state.pw.b && state.name.b && state.rePw) || !state.id.data) {
      dispatch(setCorrectState(false));
      return;
    }
    dispatch(setLoadingState(true));
    const jsonHeader = {
      'Content-Type': 'application/json',
    };
    const body = {
      userid: state.id.data,
      password: state.pw.data,
      username: state.name.data,
    };
    const signUpUrl = `${process.env.REACT_APP_SERVER_URL}/users/signup`;
    const res = await fetchData(signUpUrl, 'POST', jsonHeader, JSON.stringify(body));
    if (res.error) {
      dispatch(setLoadingState(false));
      dispatch(setCorrectState(false));
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
          state={state}
        />
      </Container>
    </WholeContainer>
  );
};

export default SignUp;
