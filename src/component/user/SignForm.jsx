import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const ExtBtn = styled(Button)`
  width: 100%;
`
const NavContainer = styled.div`
  margin-top: 1rem;
`;
const ButtonGroup = styled(Button.Group)`
  width:100%;
`
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
  width: 100%;
`;
const SetCenter = styled.div`
  display: flex;
  flex-direction: column;
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
    <Form.Field>
      <input placeholder='아이디' />
    </Form.Field>
    <Form.Field>
      <input type='password' placeholder='비밀먼호' />
    </Form.Field>
    <ExtBtn type='submit'>로그인</ExtBtn>
  </Form>
)

export { SignInForm, SignNav, SignLogo, Container, SetCenter }