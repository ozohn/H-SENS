import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import fetchData from '../component/fetchData';
import UserSetting from './UserSetting';

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
  const [user, setUser] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchData(`${process.env.REACT_APP_SERVER_URL}/creator`, 'POST', {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }).then(userInfo => {
      setUser(userInfo);
    });
  }, []);
  return (
    <User>
      {!editing ? (
        <UserInfo
          user={user}
          setUser={setUser}
          editing={editing}
          setEditing={setEditing}
        />
      ) : (
        <UserSetting
          user={user}
          setUser={setUser}
          editing={editing}
          setEditing={setEditing}
        />
      )}
      <Works user={user} />
    </User>
  );
}

export default UserPage;
