import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ExtBtn = styled(Button)`
  width: 100%;
`;
const NavContainer = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const ButtonGroup = styled(Button.Group)`
  width: 100%;
`;
const SignLogo = styled.div`
  display: flex;
  width 20rem;
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

const SignNav = () => (
  <NavContainer>
    <ButtonGroup>
      <Button as={Link} to="/findid">
        아이디 찾기
      </Button>
      <Button.Or />
      <Button as={Link} to="/findpw">
        비밀번호 찾기
      </Button>
      <Button.Or />
      <Button as={Link} to="/signup">
        회원가입
      </Button>
    </ButtonGroup>
  </NavContainer>
);

const SignInSubmitBtn = ({ submit, submitBtn }) => {
  return (
    <ExtBtn
      onClick={submit}
      content={submitBtn.bCorrect ? '로그인' : '어떠한 값도 없습니다.'}
      loading={submitBtn.bLoading ? true : null}
    />
  );
};

const SignInForm = ({ Fns, Datas }) => (
  <Form>
    <Form.Input placeholder="아이디" onChange={Fns.getId} />
    <Form.Input type="password" placeholder="비밀번호" onChange={Fns.getPw} />
    <SignInSubmitBtn submit={Fns.submit} submitBtn={Datas.submitBtn} />
  </Form>
);

const GetIdContent = ({ id, checkId }) => {
  const idLabel = id.b ? '아이디' : '아이디-중복된 아이디거나 6-12글자가 아닙니다.';

  return (
    <Form.Input
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
    <Form.Input
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
    <Form.Input
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
    <Form.Input
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
    <Form>
      <GetIdContent
        id={Datas.id}
        checkId={Fns.checkId}
        checkOverlap={Fns.checkOverlap}
        overlap={Datas.overlap}
      />
      <GetPwContent pw={Datas.pw} checkPw={Fns.checkPw} />
      <GetRePwContent rePw={Datas.rePw} checkRePw={Fns.checkRePw} />
      <GetNameContent name={Datas.name} checkName={Fns.checkName} />
      <Form.Checkbox label="본 페이지를 포트폴리오 관련 목적으로 사용할 것을 약속합니다." />
      <SignUpSubmitBtn submitBtn={Datas.submitBtn} submit={Fns.submit} />
    </Form>
  );
};

export { SignInForm, SignNav, SignLogo, Container, SignUpForm };
