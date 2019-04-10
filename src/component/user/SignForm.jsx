import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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
  font-size: 6.1rem;
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

const SignInForm = () => (
  <Form>
    <Form.Input placeholder="아이디" />
    <Form.Input type="password" placeholder="비밀번호" />
    <ExtBtn type="submit">로그인</ExtBtn>
  </Form>
);

const GetIdContent = props => {
  const idLabel = props.id.b ? '아이디' : '아이디-문자/숫자 조합 6-12글자';

  return (
    <Form.Input
      fluid
      label={idLabel}
      placeholder="아이디"
      onChange={props.checkId}
      error={props.id.b ? null : true}
    />
  );
};

const GetPwContent = props => {
  let pwLabel = props.pw.b
    ? '비밀번호'
    : '비밀번호-특수문자/문자/숫자 조합8-15글자';

  return (
    <Form.Input
      type="password"
      className="pw"
      fluid
      label={pwLabel}
      placeholder="비밀번호"
      onChange={props.checkPw}
      error={props.pw.b ? null : true}
    />
  );
};

const GetRePwContent = props => {
  const rePwLabel = props.rePw.b ? null : '비밀번호와 같지 않습니다.';

  return (
    <Form.Input
      type="password"
      placeholder="비밀번호 재입력"
      fluid
      label={rePwLabel}
      onChange={props.checkRePw}
      error={props.rePw.b ? null : true}
    />
  );
};

const GetNameContent = props => {
  const nameLabel = props.name.b ? '이름' : '이름은 한 글자 이상이어야 합니다.';

  return (
    <Form.Input
      fluid
      label={nameLabel}
      placeholder="이름"
      onChange={props.checkName}
      error={props.name.b ? null : true}
    />
  );
};

const SignUpForm = props => {
  return (
    <Form>
      <GetIdContent id={props.Datas.id} checkId={props.Fns.checkId} />
      <GetPwContent pw={props.Datas.pw} checkPw={props.Fns.checkPw} />
      <GetRePwContent rePw={props.Datas.rePw} checkRePw={props.Fns.checkRePw} />
      <GetNameContent name={props.Datas.name} checkName={props.Fns.checkName} />
      <Form.Checkbox label="본 페이지를 포트폴리오 관련 목적으로 사용할 것을 약속합니다." />
      <ExtBtn onClick={props.submit}>가입</ExtBtn>
    </Form>
  );
};

export { SignInForm, SignNav, SignLogo, Container, SignUpForm };
