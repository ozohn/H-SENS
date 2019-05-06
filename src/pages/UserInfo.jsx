import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { CreatorContext } from '../context/creator/creatorContext';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: #fff;
  padding: 3rem 2rem 0 2rem;
  height: 100vh;
  width: 100vw;
`;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
`;
const Heading3 = styled.h3`
  font-size: 4rem;
`;
const Heading2 = styled.h2`
  font-size: 5rem;
  margin: 0;
`;
const UserDesc = styled.p`
  font-size: 3rem;
  line-height: 3.2rem;
`;
const ImageContainer = styled(Image)`
  &&& {
    float: right;
    margin-right: 6rem;
  }
`;

const CustomButton = styled(Link)`
  display: inline-block;
  color: #95bfb4;
  margin-right: 3rem;
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

export default function UserInfo() {
  const { state, dispatch } = useContext(CreatorContext);
  const { userimage, userdesc, username } = state;
  return (
    <Container>
      <HeadingContainer>
        <Heading3>Stories</Heading3>
        <Heading2>{username}</Heading2>
      </HeadingContainer>
      <ImageContainer src={userimage} verticalAlign="top" size="small" circular />
      <UserDesc>{userdesc}</UserDesc>
      <CustomButton
        to={{
          pathname: '/usersetting',
        }}
      >
        Edit
      </CustomButton>
    </Container>
  );
}
