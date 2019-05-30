import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import InputContainer from '../InputContainer';
import SignLogo from '../SignLogo';
import SignUpForm from './SignUpForm';
import { CREATE_ACCOUNT, CONFIRM_ID } from './SignUpQueries';

const SignUpComponent = ({ history }) => {
  const initialState = {
    error: false,
    value: '',
  };
  const [userid, setId] = useState(initialState);
  const [pw, setPw] = useState(initialState);
  const [rePw, setRePw] = useState(initialState);
  const [username, setName] = useState(initialState);
  const [action, setAction] = useState({ text: 'sign up', loading: false });

  const checkOverlap = useMutation(CONFIRM_ID, {
    variables: { userid: userid.value },
  });

  const getAccount = useMutation(CREATE_ACCOUNT, {
    variables: {
      userid: userid.value,
      password: pw.value,
      username: username.value,
    },
  });

  const checkId = async () => {
    const idRegExp = /^[A-Za-z0-9]{6,12}$/;
    if (!idRegExp.test(userid.value)) setId({ ...userid, error: true });
    else if (userid.value !== '') {
      try {
        const {
          data: { confirmId },
        } = await checkOverlap();
        setId({ ...userid, error: confirmId });
      } catch (error) {
        return error.message;
      }
    }
  };

  const checkPw = e => {
    const curVal = e.target.value;
    const pwRegExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    setPw({ error: !pwRegExp.test(curVal), value: curVal });
  };

  const checkRePw = e => setRePw({ ...rePw, error: pw.value !== e.target.value });

  const checkName = e =>
    setName({ value: e.target.value, error: !e.target.value.length });

  const submit = async () => {
    if (
      userid.error ||
      pw.error ||
      username.error ||
      rePw.error ||
      userid.value === '' ||
      pw.value === '' ||
      username.value === ''
    ) {
      setAction({ ...action, text: 'Check Please' });
    } else {
      setAction({ ...action, loading: true });
      const {
        data: { createAccount },
      } = await getAccount();
      if (!createAccount) {
        throw new Error('중복된 아이디입니다.');
      } else {
        setAction({ loading: false, text: 'Success' });
        history.push(`/signin`);
      }
    }
  };

  return (
    <>
      <SignLogo as={Link} to="/" />
      <InputContainer>
        <SignUpForm
          Fns={{ checkId, setId, checkPw, checkRePw, checkName, submit }}
          state={{ userid, pw, rePw, username, action }}
        />
      </InputContainer>
    </>
  );
};

export default withRouter(SignUpComponent);
