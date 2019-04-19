import React, { useState, useEffect } from "react";
import { Button, Divider } from 'semantic-ui-react'
import useFetch from "../component/fetch.js";
import UserSetting from "./UserSetting.jsx";
import UserInfo from "./UserInfo.jsx";
import changeUserInfo from "../component/changeUserInfo.js";
import styled from 'styled-components';

const User = styled.div`
  margin-top: 8rem;
  
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
    </User>
  );
}


export default UserPage;
