import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Image } from "semantic-ui-react";
import { Button, Divider, Form } from 'semantic-ui-react'
import useFetch from "../fetch.js";

import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";

function UserPage() {
  const [user, setUser] = useState({});
  const [files, setFiles] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/creator`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(result => setUser(result));
  }, []);

  return (
    <>
      <UserInfo user={user} />
      {/* <WorksList /> */}
      {/* <FilePond
        files={files}
        allowMultiple={true}
        maxFiles={3}
        server={process.env.REACT_APP_SERVER_URL}
        onupdatefiles={fileItems => {
          // Set current file objects to this.state
          setFiles(fileItems.map(fileItem => fileItem.file));
        }}
      /> */}
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
        UserView(userName, userDesc, setEditing):UserForm(userName, userDesc, setUserName, setUserDesc, setEditing)
      }
    </>
  );
}

function UserView(userName, userDesc, setEditing){
  return (
    <div>
      <h2>{userName}</h2>
      <p>{userDesc}</p>
      <button onClick={()=>setEditing(true)}>Edit</button>
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
  return fetch(`${process.env.REACT_APP_SERVER_URL}/creator/edit`, {
    method: 'POST',
    headers: {
      "Content-Type": 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(obj)
  }).then(res => res.json()).then(result => result);
}

export default UserPage;
