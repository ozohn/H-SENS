import styled from 'styled-components';
import React from 'react';
import UserInfo from './UserInfo';
import Works from './Works';

const User = styled.div`
  position: relative;
  height: 200vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  font-weight: bold;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

function UserPage() {
  return (
    <User>
      <UserInfo />
      <Works />
    </User>
  );
}

export default UserPage;
