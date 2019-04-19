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

function UserPage() {
  const [user, setUser]= useState('');
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    useFetch(
      `${process.env.REACT_APP_SERVER_URL}/creator`, 
      "POST", 
      {"Authorization": `Bearer ${localStorage.getItem("token")}`}
    ).then(user => {
      setUser(user);
    });
  }, []);

  return (
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
}

export default UserPage;
