import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import getBase64 from '../component/getBase64';
import fetchData from '../component/fetchData';
import EditBtn from '../component/button/EditBtn';
import InputForm from '../component/form/Input';

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: inline-block;
  padding: 2rem 2rem 0 2rem;
  height: 100vh;
  width: 100%;
  background-color: #fff;
`;

const TextArea = styled.textarea`
  height: 10rem;
  width: 50vw;
  margin: 3rem 0 3rem 0;
  border: 0;
  border-bottom: 0.2rem solid #95bfb4;
  font-size: 2rem;
  font-weight: bold;
  background: transparent;
  outline: 0;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
`;
const Input = styled.input`
  width: 50vw;
  margin: 4rem 0 4rem 0;
  border: 0;
  border-bottom: 0.2rem solid #95bfb4;
  outline: 0;
  font-size: 4rem;
  font-weight: bold;
  background: transparent;
  color: #1f272f;
`;
const InputFile = styled.input`
  outline: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none;
`;
const FileLabel = styled.label`
  width: 14rem;
  border: 2px dashed #95bfb4;
  border-radius: 5px;
  display: block;
  padding: 1rem;
  transition: border 300ms ease;
  cursor: pointer;
  text-align: center;
`;

function handleClick(user) {
  const body = {
    username: user.username,
    userdesc: user.userdesc,
    userimage: user.userimage,
  };
  fetchData(
    `${process.env.REACT_APP_SERVER_URL}/creator/edit`,
    'POST',
    {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    JSON.stringify(body),
  );
}

function UserSetting({ user, setUser, editing, setEditing }) {
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
      <InputForm
        Tag={Input}
        cb={setUserName}
        placeholder="Name"
        label="Who are you?"
        type="text"
      />
      <InputForm
        Tag={TextArea}
        cb={setUserDesc}
        label="More"
        placeholder="What's up?"
        type="textarea"
      />
      <FileLabel>
        Profie Image
        <Icon disabled name="image" size="big" />
        <InputFile
          type="file"
          accept=".jpg, .jpeg, .png"
          onChange={e => getBase64(e.target.files[0], setUserImage)}
        />
      </FileLabel>
      <EditBtn
        user={user}
        editing={editing}
        setEditing={setEditing}
        handleClick={handleClick}
      />
    </FormContainer>
  );
}

export default UserSetting;
