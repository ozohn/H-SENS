import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import LinkButton from './LinkBtn';

const Container = styled.div`
  position: relative;
  z-index: 3;
  background-color: #fff;
  padding: 3rem 2rem 0 2rem;
  height: 100vh;
  width: 100vw;
`;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 5rem;
`;
const Heading2 = styled.h2`
  font-size: 5rem;
  margin: 0;
  color: #231f20;
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

const UserInfo = ({ userid, username, userdesc, userimage }) => {
  return (
    <Container>
      <HeadingContainer>
        <Heading2>{username}</Heading2>
        <LinkButton
          pathname={`/${userid}/editor`}
          state={{ submit: 'Edit' }}
          text="Edit"
        />
      </HeadingContainer>
      <ImageContainer src={userimage} verticalAlign="top" size="small" circular />
      <UserDesc>{userdesc}</UserDesc>
    </Container>
  );
};

export default UserInfo;
