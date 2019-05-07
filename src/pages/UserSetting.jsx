import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import getBase64 from '../component/getBase64';
import fetchData from '../component/fetchData';
import InputForm from '../component/form/Input';
import { CreatorContext } from '../context/creator/creatorContext';

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

const CustomButton = styled(Link)`
  color: #95bfb4;
  margin-right: 3rem;
  display: inline-block;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  &:hover {
    border-bottom: 1px solid #95bfb4;
  }
`;

function UserSetting() {
  const { modifyUserInfo } = useContext(CreatorContext);
  const [userName, setUserName] = useState();
  const [userDesc, setUserDesc] = useState();
  const [userImage, setUserImage] = useState();

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
      <CustomButton
        to="/user"
        onClick={() => {
          modifyUserInfo({ userDesc, userImage, userName });
        }}
      >
        submit
      </CustomButton>
    </FormContainer>
  );
}

export default UserSetting;
