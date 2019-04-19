import React, { useState, useEffect } from "react";
import {  Form } from 'semantic-ui-react';

function UserSetting({user, setUser}){
  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    setUser({...user, username: userName, userdesc: userDesc, userimage: userImage})
  }, [userName, userDesc, userImage])

  return (
    <>
      <Form>
        <Form.Input label='user name' placeholder='name' onChange={(e) => {setUserName(e.target.value);} }/>
        <Form.Field label='user description' control='textarea' rows='3' onChange={(e) => setUserDesc(e.target.value)} />
      </Form>
      <div>
        <input type="file" accept=".jpg, .jpeg, .png" onChange={e => getBase64(e.target.files[0], setUserImage)} />
      </div>
    </>
  )
}

function getBase64(file, setUserImage) {
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    setUserImage(reader.result);
  };
  reader.onerror = function (error) {
    console.error('Error: ', error);
  };
}

export default UserSetting;
