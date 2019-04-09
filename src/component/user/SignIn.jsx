import React from 'react';
import styled from 'styled-components';

import SignNav from './SignNav.jsx';
import SignInForm from './SignInForm.jsx';

const SignInLogo = styled.div`
  display: flex;
  font-size: 6.1rem;
  width 20rem;
  height: 6.3rem;
  margin: 3rem auto;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const SetCenter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto 0 auto;
`;

const SignIn = props => {
  return (
    <>
      <SignInLogo>H-Sens</SignInLogo>
      <Container>
        <SetCenter>
          <SignInForm />
          <SignNav />
        </SetCenter>
      </Container>
    </>
  );
};

export default SignIn;
