import React from 'react';
import IdContent from './IdContent';
import PwContent from './Pwcontent';
import RePwContent from './RePwContent';
import NameContent from './NameContent';
import SignUpsubmitBtn from './SignUpSubmitBtn';

const SignUpForm = ({ state, Fns }) => {
  return (
    <form>
      <IdContent id={state.id} checkId={Fns.checkId} />
      <PwContent pw={state.pw} checkPw={Fns.checkPw} />
      <RePwContent rePw={state.rePw} checkRePw={Fns.checkRePw} />
      <NameContent name={state.name} checkName={Fns.checkName} />
      <SignUpsubmitBtn
        bLoading={state.bLoading}
        bCorrect={state.bCorrect}
        submit={Fns.submit}
      />
    </form>
  );
}; // production build 해보기. 로딩속도 체크해보기. 성능개선관점, network탭의 performance탭을 열어보기

export default SignUpForm;
