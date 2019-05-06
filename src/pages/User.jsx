import styled from 'styled-components';
import React, { useState, useEffect, useReducer, useContext } from 'react';
import fetchData from '../component/fetchData';
import { Provider } from '../context/creator/creatorContext';
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
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   fetchData(`${process.env.REACT_APP_SERVER_URL}/creator`, 'POST', {
  //     Authorization: `Bearer ${localStorage.getItem('token')}`,
  //   }).then(userInfo => {
  //     console.log(userInfo);
  //     setUser(userInfo);
  //   });
  // }, []);
  return (
    <Provider>
      <User>
        <UserInfo />
        <Works />
      </User>
    </Provider>
  );
}

export default UserPage;
