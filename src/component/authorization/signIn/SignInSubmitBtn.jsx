/* eslint-disable no-nested-ternary */
import React from 'react';
import PumpLoadingAni from '../PumpLoadingAni';
import SubmitBtn from '../SubmitBtn';

const SignInSubmitBtn = ({ submit, action }) => {
  return (
    <SubmitBtn onClick={submit}>
      {action.loading ? <PumpLoadingAni /> : action.text}
    </SubmitBtn>
  );
};

export default SignInSubmitBtn;
