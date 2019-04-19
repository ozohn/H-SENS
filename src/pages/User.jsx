<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Button, Divider } from 'semantic-ui-react'
import useFetch from "../component/fetch.js";
import UserSetting from "./UserSetting.jsx";
import UserInfo from "./UserInfo.jsx";
import changeUserInfo from "../component/changeUserInfo.js";
import styled from 'styled-components';

const User = styled.div`
  border-top: .4rem solid #00ADB5;
  padding-top: 8rem;
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  padding-left: 8rem;
`;
const CustomButton = styled.button`
  width: 8rem;
  border-radius: 2rem;
  margin-right: 3rem;
  padding: 1rem 2rem;
  background-color: #fff;
  border: 1px solid #e8e8e8;
  outline: none;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 8px 18px;
`;
=======
import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import useFetch from '../component/fetch.js';
import UserSetting from './UserSetting.jsx';
import UserInfo from './UserInfo.jsx';
import changeUserInfo from '../component/changeUserInfo.js';
>>>>>>> e26d00affe0579cc7087a127c58a7c30d6eb4129

function UserPage() {
  const [user, setUser] = useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    useFetch(`${process.env.REACT_APP_SERVER_URL}/creator`, 'POST', {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }).then(user => {
      setUser(user);
    });
  }, []);

  return (
<<<<<<< HEAD
    <User>
      {!editing?
        <UserInfo user={user} setUser={setUser} editing={editing} setEditing={setEditing} />:
        <UserSetting user={user} setUser={setUser} />
      }
      <ButtonContainer>
        <ToggleButton user={user} editing={editing} setEditing={setEditing}/>
      </ButtonContainer>
    </User>
  );
}


function ToggleButton({editing, user, setEditing}){
  return (
    <CustomButton onClick={()=> {
      if(editing) changeUserInfo(user, 1);
      setEditing(!editing);
    }}>
      {!editing?"Edit":"submit"}
    </CustomButton>
  )
=======
    <>
      {!editing ? (
        <UserInfo user={user} />
      ) : (
        <UserSetting user={user} setUser={setUser} />
      )}
      <ToggleButton
        user={user}
        setUser={setUser}
        editing={editing}
        setEditing={setEditing}
      />
    </>
  );
}

function ToggleButton({ editing, user, setEditing }) {
  return (
    <Button
      onClick={() => {
        console.log(user);
        if (editing) changeUserInfo(user, 1);
        setEditing(!editing);
      }}
    >
      {!editing ? 'Edit' : 'submit'}
    </Button>
  );
>>>>>>> e26d00affe0579cc7087a127c58a7c30d6eb4129
}

export default UserPage;
