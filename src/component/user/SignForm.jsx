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

const SignUpForm = props => (
  <Form>
    {props.bId ? (
      <Form.Input fluidlabel="아이디" placeholder="아이디" onChange={props.checkId} />
    ) : (
      <Form.Input fluidlabel="아이디" placeholder="아이디" onChange={props.checkId} error />
    )}
    <Form.Input fluidlabel="아이디" placeholder="아이디" error />
    <Form.Input fluidlabel="비밀번호" placeholder="비밀번호" error />
    <Form.Input placeholder="비밀번호 재입력" error />
    <Form.Input fluidlabel="이름" placeholder="이름" error />
    <Form.Checkbox label="본 페이지를 포트폴리오 관련으로 사용할 것을 약속합니다." />
    <ExtBtn type="submit">가입</ExtBtn>
  </Form>
);

export { SignInForm, SignNav, SignLogo, Container, SignUpForm };
