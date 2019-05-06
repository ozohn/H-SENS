/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledInput, // 밑줄 인풋창
  WholeContainer, // 가운데로 맞추고 DOM들의 방향을 아래로 하는 컨테이너
  ExtBtn, // 확장시켜놓은 버튼
  SignUpBtn, // 회원가입으로 가는 조그마한 버튼
  SignLogo, // 회원가입 위의 로고 버튼
  Container, // 전체를 감싸는 컨테이너
  LoadingAni, // 로딩 애니메이션
  Error, // 에러 폼
} from './SignStyle';

const LinkedSignUpBtn = () => (
  <SignUpBtn as={Link} to="/signup">
    Sign Up
  </SignUpBtn>
);

const SignInSubmitBtn = ({ submit, bLoading, bCorrect }) => {
  return (
    <ExtBtn onClick={submit}>
      {bLoading ? <LoadingAni /> : bCorrect ? 'sign in' : 'Check Please'}
    </ExtBtn>
  );
};

const SignInForm = ({ Fns, Datas }) => (
  <form>
    <StyledInput placeholder="ID" onChange={Fns.getId} />
    <StyledInput type="password" placeholder="PW" onChange={Fns.getPw} />
    <LinkedSignUpBtn />
    <SignInSubmitBtn
      submit={Fns.submit}
      bLoading={Datas.bLoading}
      bCorrect={Datas.bCorrect}
    />
  </form>
);
// 여기까지 로그인 기능

const GetIdContent = ({ id, checkId }) => {
  const errorMessage = '중복된 아이디이거나 6-12글자가 아닙니다.';
  return (
    <>
      <StyledInput placeholder="ID" onBlur={checkId} error={id.b ? null : !id.b} />
      {id.b ? null : <Error>{errorMessage}</Error>}
    </>
  );
};

const GetPwContent = ({ pw, checkPw }) => {
  const errorMessage = '비밀번호는 특수문자/문자/숫자 조합의 8-15 글자여야 합니다.';
  return (
    <>
      <StyledInput
        type="password"
        placeholder="PW"
        onChange={checkPw}
        error={pw.b ? null : !pw.b}
      />
      {pw.b ? null : <Error>{errorMessage}</Error>}
    </>
  );
};

const GetRePwContent = ({ rePw, checkRePw }) => {
  const errorMessage = '비밀번호와 같지 않습니다.';

  return (
    <>
      <StyledInput
        type="password"
        placeholder="PW RE"
        onChange={checkRePw}
        error={rePw.b ? null : !rePw.b}
      />
      {rePw.b ? null : <Error>{errorMessage}</Error>}
    </>
  );
};

const GetNameContent = ({ name, checkName }) => {
  const errorMessage = '이름을 입력해주셔야 합니다.';

  return (
    <>
      <StyledInput
        placeholder="Name"
        onChange={checkName}
        error={name.b ? null : !name.b}
      />
      {name.b ? null : <Error>{errorMessage}</Error>}
    </>
  );
};

const SignUpSubmitBtn = ({ submit, bLoading, bCorrect }) => {
  return (
    <ExtBtn onClick={submit}>
      {bLoading ? <LoadingAni /> : bCorrect ? 'sign up' : 'Check Please'}
    </ExtBtn>
  );
};

const SignUpForm = ({ Datas, Fns }) => {
  return (
    <form>
      <GetIdContent id={Datas.id} checkId={Fns.checkId} />
      <GetPwContent pw={Datas.pw} checkPw={Fns.checkPw} />
      <GetRePwContent rePw={Datas.rePw} checkRePw={Fns.checkRePw} />
      <GetNameContent name={Datas.name} checkName={Fns.checkName} />
      <SignUpSubmitBtn
        bLoading={Datas.bLoading}
        bCorrect={Datas.bCorrect}
        submit={Fns.submit}
      />
    </form>
  );
}; // production build 해보기. 로딩속도 체크해보기. 성능개선관점, network탭의 performance탭을 열어보기

export { SignInForm, SignLogo, Container, SignUpForm, WholeContainer };
