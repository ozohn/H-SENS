import React from "react";
import { Image } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 8rem;
  padding: 4rem rem;
  display: inline-block;
  padding: 3rem 4rem 4rem 4rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
`;

const UserInfoContainer = styled.div`
  display: inline-block;
  padding-left: 2rem;
  max-width: 30rem;
`;

const Heading2 = styled.h2`
  margin: auto 0;
`;

const UserDesc = styled.p`
  margin-top: 2rem;
`;

export default function UserInfo({ editing, user, setEditing }) {
  return (
    <Container>
      <Image src={user.userimage} verticalAlign="top" size="small" circular />
      <UserInfoContainer>
        <Heading2>{user.username}</Heading2>
        <UserDesc>{user.userdesc}</UserDesc>
      </UserInfoContainer>
    </Container>
  );
}
