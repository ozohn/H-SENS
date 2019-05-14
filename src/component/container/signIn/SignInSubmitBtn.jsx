/* eslint-disable no-nested-ternary */
import React from 'react';
import PumpLoadingAni from '../../presenter/loaders/PumpLoadingAni';
import SubmitBtn from '../../presenter/buttons/SubmitBtn';

const SignInSubmitBtn = ({ submit, bLoading, bCorrect }) => {
  return (
    <SubmitBtn onClick={submit}>
      {bLoading ? <PumpLoadingAni /> : bCorrect ? 'sign in' : 'Check Please'}
    </SubmitBtn>
  );
};

export default SignInSubmitBtn;
