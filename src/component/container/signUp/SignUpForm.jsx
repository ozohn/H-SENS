/* eslint-disable no-nested-ternary */
import React from 'react';
import errorMessage from './errorMessage';
import AuthInputContainer from '../../presenter/forms/AuthInput';
import SubmitBtn from '../../presenter/buttons/SubmitBtn';
import PumpLoadingAni from '../../presenter/loaders/PumpLoadingAni';

const SignUpForm = ({ state, Fns }) => {
  return (
    <>
      <AuthInputContainer
        placeholder="ID"
        onBlur={Fns.checkId}
        error={state.id.b ? null : !state.id.b}
        errorMessage={errorMessage.id}
      />
      <AuthInputContainer
        type="password"
        placeholder="PW"
        onChange={Fns.checkPw}
        error={state.pw.b ? null : !state.pw.b}
        errorMessage={errorMessage.pw}
      />
      <AuthInputContainer
        type="password"
        placeholder="PW RE"
        onChange={Fns.checkRePw}
        error={state.rePw ? null : !state.rePw}
        errorMessage={errorMessage.rePw}
      />
      <AuthInputContainer
        placeholder="Name"
        onChange={Fns.checkName}
        error={state.name.b ? null : !state.name.b}
        errorMessage={errorMessage.username}
      />
      <SubmitBtn onClick={Fns.submit}>
        {state.bLoading ? (
          <PumpLoadingAni />
        ) : state.bCorrect ? (
          'sign up'
        ) : (
          'Check Please'
        )}
      </SubmitBtn>
    </>
  );
}; // production build 해보기. 로딩속도 체크해보기. 성능개선관점, network탭의 performance탭을 열어보기

export default SignUpForm;
