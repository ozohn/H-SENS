import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';

const FormContainer = styled.div`
  padding-left: 8rem;
  width: 50rem;
`;

function getBase64(file, setUserImage) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setUserImage(reader.result);
  };
  reader.onerror = error => {
    throw error.message;
  };
}

function UserSetting({ user, setUser }) {
  const [userName, setUserName] = useState('');
  const [userDesc, setUserDesc] = useState('');
  const [userImage, setUserImage] = useState('');

  useEffect(() => {
    setUser({
      username: userName || user.username,
      userdesc: userDesc || user.userdesc,
      userimage: userImage || user.userimage,
    });
  }, [userName, userDesc, userImage]);

  return (
    <FormContainer>
      <Form>
        <Form.Input
          label="user name"
          placeholder="name"
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <Form.Field
          label="user description"
          control="textarea"
          rows="3"
          onChange={e => setUserDesc(e.target.value)}
        />
      </Form>
      <div>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={e => getBase64(e.target.files[0], setUserImage)}
        />
      </div>
    </FormContainer>
  );
}

export default UserSetting;
