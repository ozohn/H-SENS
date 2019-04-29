import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledInput = styled.input`
  position: relative;
  padding: 0;
  border: 0;
  color: #011627;
  border-bottom: 1px solid #011627;
  outline: none;
  width: 100%;
  height: 5vh;
`;
const WholeContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.4rem solid #2ec4b6;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;
const ExtBtn = styled.button`
  font-size: 1.6rem;
  margin-top: 1vh;
  height: 5vh;
  border: 0;
  width: 100%;
  text-align: center;
  border: 1px solid transparent
  &:hover {
    border: 1px solid #011627;
  }
`;
const SignUpBtn = styled.button`
  margin-top: 1vh;
  color: #888;
  font-size: 1rem;
  width: 15%;
  float: right;
  &:hover {
    color: #011627;
  }
`;
const SignLogo = styled.div`
  display: flex;
  width: 20rem;
  height: 8.4rem;
  background: no-repeat url('./image/H-SensEx.png');
  background-size: contain;
  margin: 0 auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25rem;
  margin: 3rem auto 0 auto;
`;

const LinkedSignUpBtn = () => (
  <SignUpBtn as={Link} to="/signup">
    Sign Up
  </SignUpBtn>
);

const SignInSubmitBtn = ({ submit, submitBtn }) => {
  return (
    <ExtBtn onClick={submit} loading={submitBtn.bLoading ? true : null}>
      {submitBtn.bCorrect ? 'Sign In' : 'Sign In Fail'}
    </ExtBtn>
  );
};

const SignInForm = ({ Fns, Datas }) => (
  <form>
    <StyledInput placeholder="ID" onChange={Fns.getId} />
    <StyledInput type="password" placeholder="PW" onChange={Fns.getPw} />
    <LinkedSignUpBtn />
    <SignInSubmitBtn submit={Fns.submit} submitBtn={Datas.submitBtn} />
  </form>
);

const GetIdContent = ({ id, checkId }) => {
  const idLabel = id.b ? '아이디' : '아이디-중복된 아이디거나 6-12글자가 아닙니다.';

  return (
    <styledInput
      fluid
      label={idLabel}
      placeholder="아이디"
      error={id.b ? null : true}
      onBlur={checkId}
    />
  );
};

const GetPwContent = ({ pw, checkPw }) => {
  const pwLabel = pw.b ? '비밀번호' : '비밀번호-특수문자/문자/숫자 조합8-15글자';

  return (
    <styledInput
      type="password"
      className="pw"
      fluid
      label={pwLabel}
      placeholder="비밀번호"
      onChange={checkPw}
      error={pw.b ? null : true}
    />
  );
};

const GetRePwContent = ({ rePw, checkRePw }) => {
  const rePwLabel = rePw.b ? null : '비밀번호와 같지 않습니다.';

  return (
    <styledInput
      type="password"
      placeholder="비밀번호 재입력"
      fluid
      label={rePwLabel}
      onChange={checkRePw}
      error={rePw.b ? null : true}
    />
  );
};

const GetNameContent = ({ name, checkName }) => {
  const nameLabel = name.b ? '이름' : '이름은 한 글자 이상이어야 합니다.';

  return (
    <styledInput
      fluid
      label={nameLabel}
      placeholder="이름"
      onChange={checkName}
      error={name.b ? null : true}
    />
  );
};

const SignUpSubmitBtn = ({ submitBtn, submit }) => {
  return (
    <ExtBtn
      content={submitBtn.bCorrect ? '가입' : '가입 조건이 맞지 않습니다.'}
      onClick={submit}
      loading={submitBtn.bLoading ? true : null}
    />
  );
};

const SignUpForm = ({ Datas, Fns }) => {
  return (
    <form>
      <GetIdContent
        id={Datas.id}
        checkId={Fns.checkId}
        checkOverlap={Fns.checkOverlap}
        overlap={Datas.overlap}
      />
      <GetPwContent pw={Datas.pw} checkPw={Fns.checkPw} />
      <GetRePwContent rePw={Datas.rePw} checkRePw={Fns.checkRePw} />
      <GetNameContent name={Datas.name} checkName={Fns.checkName} />
      <SignUpSubmitBtn submitBtn={Datas.submitBtn} submit={Fns.submit} />
    </form>
  );
};

export { SignInForm, SignLogo, Container, SignUpForm, WholeContainer };
