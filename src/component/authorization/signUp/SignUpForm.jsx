/* eslint-disable no-nested-ternary */
import React from 'react';
import errorMessage from './errorMessage';
import AuthInputContainer from '../AuthInput';
import SubmitBtn from '../SubmitBtn';
import PumpLoadingAni from '../PumpLoadingAni';

const SignUpForm = ({ state, Fns }) => {
  return (
    <>
      <AuthInputContainer
        placeholder="ID"
        onBlur={Fns.checkId}
        onChange={e => Fns.setId({ ...state.userid, value: e.target.value })}
        error={state.userid.error}
        errorMessage={errorMessage.id}
      />
      <AuthInputContainer
        type="password"
        placeholder="PW"
        onChange={Fns.checkPw}
        error={state.pw.error}
        errorMessage={errorMessage.pw}
      />
      <AuthInputContainer
        type="password"
        placeholder="PW RE"
        onChange={Fns.checkRePw}
        error={state.rePw.error}
        errorMessage={errorMessage.rePw}
      />
      <AuthInputContainer
        placeholder="Name"
        onChange={Fns.checkName}
        error={state.username.error}
        errorMessage={errorMessage.username}
      />
      <SubmitBtn onClick={Fns.submit}>
        {state.loading ? <PumpLoadingAni /> : state.action.text}
      </SubmitBtn>
    </>
  );
}; // production build 해보기. 로딩속도 체크해보기. 성능개선관점, network탭의 performance탭을 열어보기

export default SignUpForm;
