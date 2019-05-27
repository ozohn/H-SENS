/* eslint-disable no-nested-ternary */
import React from 'react';
import PumpLoadingAni from '../../presenter/loaders/PumpLoadingAni';
import SubmitBtn from '../../presenter/buttons/SubmitBtn';

const SignInSubmitBtn = ({ submit, action }) => {
  return (
    <SubmitBtn onClick={submit}>
      {action.loading ? <PumpLoadingAni /> : action.text}
    </SubmitBtn>
  );
};

export default SignInSubmitBtn;
