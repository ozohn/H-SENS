import styled from 'styled-components';
import React, { useState, useEffect, useRef } from 'react';
import fetchData from '../component/fetchData';
import UserSetting from './UserSetting';

import UserInfo from './UserInfo';
import changeUserInfo from '../component/changeUserInfo';
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

const CustomButton = styled.button`
  color: #95bfb4;
  margin-right: 3rem;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  &:hover {
    border-bottom: 1px solid #95bfb4;
  }
`;

function handleClick(user) {
  const body = {
    username: user.username,
    userdesc: user.userdesc,
    userimage: user.userimage,
  };
  fetchData(
    `${process.env.REACT_APP_SERVER_URL}/creator/edit`,
    'POST',
    {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    JSON.stringify(body),
  );
}

function ToggleButton({ editing, user, setEditing }) {
  return (
    <CustomButton
      onClick={() => {
        if (editing) {
          changeUserInfo(user);
          handleClick(user);
        }
        setEditing(!editing);
      }}
    >
      {!editing ? 'Edit' : 'submit'}
    </CustomButton>
  );
}

function UserPage() {
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);
  const scrollInfo = useRef(null);

  useEffect(() => {
    fetchData(`${process.env.REACT_APP_SERVER_URL}/creator`, 'POST', {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }).then(userInfo => {
      setUser(userInfo);
    });
  }, []);
  return (
    <User ref={scrollInfo}>
      {!editing ? (
        <UserInfo
          user={user}
          setUser={setUser}
          editing={editing}
          setEditing={setEditing}
          ToggleButton={ToggleButton}
        />
      ) : (
        <UserSetting
          user={user}
          setUser={setUser}
          editing={editing}
          setEditing={setEditing}
          ToggleButton={ToggleButton}
        />
      )}
      <Works user={user} />
    </User>
  );
}

export default UserPage;
