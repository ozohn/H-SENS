import React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import EditBtn from '../component/button/EditBtn';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: #fff;
  display: inline-block;
  padding: 3rem 2rem 0 2rem;
  height: 100vh;
  width: 100%;
`;
const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5rem;
`;
const Heading3 = styled.h3`
  font-size: 4rem;
`;
const Heading2 = styled.h2`
  font-size: 5rem;
  margin: auto 0;
`;

const UserDesc = styled.p`
  margin-top: 2rem;
  font-size: 3rem;
  line-height: 3.2rem;
`;

const ImageContainer = styled(Image)`
  &&& {
    float: right;
    margin-right: 6rem;
  }
`;

export default function UserInfo({ user, editing, setEditing }) {
  return (
    <Container>
      <HeadingContainer>
        <Heading3>Stories</Heading3>
        <Heading2>{user.username}</Heading2>
      </HeadingContainer>
      <ImageContainer src={user.userimage} verticalAlign="top" size="small" circular />
      <UserDesc>{user.userdesc}</UserDesc>
      <EditBtn user={user} editing={editing} setEditing={setEditing} />
    </Container>
  );
}
