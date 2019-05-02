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
} from './SignStyle';

const LinkedSignUpBtn = () => (
  <SignUpBtn as={Link} to="/signup">
    Sign Up
  </SignUpBtn>
);

const SignInSubmitBtn = ({ submit, bLoading, bCorrect }) => {
  return (
    <ExtBtn onClick={submit}>
      {bLoading ? <LoadingAni /> : bCorrect ? 'Sing in' : 'Check Please'}
      {/* {bCorrect ? 'Sign In' : 'Not Correct'} */}
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
