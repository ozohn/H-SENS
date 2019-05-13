/* eslint-disable no-nested-ternary */
import React from 'react';
import SubmitBtn from '../../presenter/buttons/SubmitBtn';
import PumpLoadingAni from '../../presenter/loaders/PumpLoadingAni';

const SignUpSubmitBtn = ({ submit, bLoading, bCorrect }) => {
  return (
    <SubmitBtn onClick={submit}>
      {bLoading ? <PumpLoadingAni /> : bCorrect ? 'sign up' : 'Check Please'}
    </SubmitBtn>
  );
};

export default SignUpSubmitBtn;
