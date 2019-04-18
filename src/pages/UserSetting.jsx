import React, { useState, useEffect } from "react";
import {  Form } from 'semantic-ui-react'

function UserSetting({user, setUser}){
  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');

  useEffect(() => {
    setUser({...user, username: userName, userdesc: userDesc})
  }, [userName, userDesc])

  return (
    <Form>
      <Form.Input label='user name' placeholder='name' onChange={(e) => {setUserName(e.target.value);} }/>
      <Form.Field label='user description' control='textarea' rows='3' onChange={(e) => setUserDesc(e.target.value)} />
    </Form>
  )
}

export default UserSetting;
