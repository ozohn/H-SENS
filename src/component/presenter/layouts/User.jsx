import styled from 'styled-components';
import React, { useState, useEffect, useContext } from 'react';
import UserInfo from '../../container/user/UserInfo';
import Works from './Works';
import fetchData from '../../../util/fetchData';
import { MainContext } from '../../../context/main/mainContext';

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
  console.log(state);
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
