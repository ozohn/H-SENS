import styled from 'styled-components';
import React, { useContext } from 'react';
import UserInfo from '../../container/user/UserInfo';
import Works from './Works';
import { MainContext } from '../../../context/mainContext';

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
  const { state } = useContext(MainContext);
  if (state.curData.user) {
    return (
      <User>
        <UserInfo />
        <Works />
      </User>
    );
  }
  return null;
}

export default UserPage;
