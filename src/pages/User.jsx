import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";
import { Button, Divider, Form } from 'semantic-ui-react'
import useFetch from "../component/fetch.js";

function UserPage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    useFetch(
      `${process.env.REACT_APP_SERVER_URL}/creator`, 
      "POST", 
      {"Authorization": `Bearer ${localStorage.getItem("token")}`}
    ).then(userInfo => setUser(userInfo));
  }, []);

  return (
    <>
      <UserInfo user={user} />
      {/* <WorksList /> */}
    </>
  );
}

function UserInfo({user}) {
  const [userName, setUserName]= useState('');
  const [userDesc, setUserDesc]= useState('');
  const [editing, setEditing] = useState(false);
  
  useEffect(() => {
    setUserName(user.username);
    setUserDesc(user.userdesc);
  }, [user])

  return (
    <>
      <Image src={user.userimage} size="small" circular />
      {!editing?
        UserView(userName, userDesc, setEditing):
        UserForm(userName, userDesc, setUserName, setUserDesc, setEditing)
      }
      
    </>
  );
}

function UserView(userName, userDesc, setEditing){
  const [active, setActive] = useState(false);
  return (
    <div>
      <h2>{userName}</h2>
      <p>{userDesc}</p>
      <Button toggle active={active} onClick={()=>{
        setEditing(true);
        setActive(true);
      }}>
        Toggle
      </Button>
    </div>
  );
}

function UserForm(userName, userDesc, setUserName, setUserDesc, setEditing){
  return (
    <Form>
      <Form.Input label='name' placeholder='name' onChange={(e) => {setUserName(e.target.value);} }/>
      <Form.Field label='An HTML <textarea>' control='textarea' rows='3' onChange={(e) => setUserDesc(e.target.value)} />
      <Form.Field label='An HTML <button>' control='button' onClick={async () => {
        const result = await ChangeUserInfo(userName, userDesc); 
        setUserName(result.username);
        setUserDesc(result.userdesc);
        setEditing(false);
      }}>
      HTML Button
      </Form.Field>
    </Form>
  )
}

function ChangeUserInfo(userName, userDesc){
  let obj = {
    username: userName,
    userdesc: userDesc
  };
  return useFetch(
    `${process.env.REACT_APP_SERVER_URL}/creator/edit`, 
    "POST", 
    {
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    JSON.stringify(obj)
  ).then(res => console.log(res));
}

export default UserPage;
