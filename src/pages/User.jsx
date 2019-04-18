import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Form } from 'semantic-ui-react'
import useFetch from "../component/fetch.js";
import UserSetting from "./UserSetting.jsx";
import UserInfo from "./UserInfo.jsx";

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
    <>
      {!editing?
        <UserInfo user={user} />:
        <UserSetting user={user} setUser={setUser} />
      }
      <Button onClick={()=> {
        setEditing(!editing);
      }}>
      Edit
      </Button>
    </>
  );
}


export default UserPage;
