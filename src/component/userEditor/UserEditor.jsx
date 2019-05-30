import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useQuery, useMutation } from 'react-apollo-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';
import UserValiation from './UserValiation';

import EDIT_USER from './UserQueries';
import getBase64 from '../../util/getBase64';

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: inline-block;
  padding: 4rem 4rem 4rem;
  width: 60rem;
  background-color: #fff;
`;

const Fields = styled.div`
  margin-bottom: 7rem;
`;

const TextArea = styled.textarea`
  display: block;
  margin-top: 3rem;
  height: 25rem;
  width: 50rem;
  border: 0;
  border: 0.2rem solid #231f20;
  font-size: 2rem;
  font-weight: bold;
  background: transparent;
  outline: 0;
  vertical-align: top;
  &:focus {
    border: 0.2rem solid #55fe47;
  }
  &::-webkit-scrollbar {
    width: 0;
  }
`;
const Input = styled.input`
  display: inline-block;
  padding-left: 1rem;
  width: 22rem;
  border: 0;
  border-bottom: 0.2rem solid #231f20;
  outline: 0;
  font-size: 4rem;
  font-weight: bold;
  background: transparent;
  color: #1f272f;
  vertical-align: top;
  &:focus {
    border-bottom: 0.2rem solid #55fe47;
  }
`;
const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  outline: 0;
  opacity: 0;
  pointer-events: none;
  user-select: none;
`;
const FileLabel = styled.label`
  padding: 3rem 0 2.4rem;
  position: relative;
  display: inline-block;
  width: 14rem;
  border: 2px solid #231f20;
  background-color: #231f20;
  font-size: 2rem;
  font-weight: bold;
  color: #54ff47;
  transition: border 300ms ease;
  cursor: pointer;
  text-align: center;
`;

const Heading3 = styled.h3`
  margin: 0;
  margin-top: 1rem;
  margin-right: 2rem;
  font-size: 4rem;
  color: #231f20;
  display: inline-block;
  vertical-align: top;
`;

const Button = styled.button`
  color: #95bfb4;
  float: right;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  color: #231f20;
  background-color: #55fe47;
  &:hover {
    color: #231f20;
  }
`;

const QUERY = gql`
  query seeUser($userid: String!) {
    seeUser(userid: $userid) {
      userdesc
      username
      userimage
    }
  }
`;

function UserEditor({
  match: {
    params: { userid },
  },
}) {
  const { data, loading } = useQuery(QUERY, {
    variables: { userid },
  });

  const [username, setUserName] = useState('');
  const [userdesc, setUserDesc] = useState('');
  const [userimage, setUserImage] = useState('');
  const [error, setError] = useState(false);

  const changeUserInfo = useMutation(EDIT_USER, {
    variables: { username, userdesc, userimage },
  });
  console.log(username);
  useEffect(() => {
    if (loading) return;
    setUserDesc(data.seeUser.userdesc);
    setUserName(data.seeUser.username);
    setUserImage(data.seeUser.userimage);
  }, [data.seeUser]);

  return (
    <FormContainer>
      {!loading && (
        <>
          <Fields>
            <Heading3>Who are you?</Heading3>
            <Input
              type="text"
              placeholder="Name"
              onChange={e => {
                !e.target.value ? setError(true) : setError(false);
                setUserName(e.target.value);
              }}
              value={username}
            />
          </Fields>
          <Fields>
            <Heading3>More</Heading3>
            <TextArea
              type="textarea"
              placeholder="More"
              onChange={e => {
                setUserDesc(e.target.value);
              }}
              value={userdesc || ''}
            />
          </Fields>
          <UserValiation error={error} />
          <FileLabel>
            Image
            <InputFile
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={e => getBase64(e.target.files[0], setUserImage)}
            />
          </FileLabel>
          <Button
            onClick={() => {
              if (error) return;
              changeUserInfo();
              window.location.replace(`${process.env.REACT_APP_CLIENT_URL}/${userid}`);
            }}
          >
            Submit
          </Button>
        </>
      )}
    </FormContainer>
  );
}

export default withRouter(UserEditor);
