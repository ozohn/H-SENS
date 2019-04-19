import React from "react";
import { Image, Button } from "semantic-ui-react";
import styled from 'styled-components';
import changeUserInfo from "../component/changeUserInfo.js";

const Container = styled.div`
  margin-left: 8rem;
  padding: 3rem 4rem;
  display: inline-block;
  box-shadow: 0 0 3px rgba(0,0,0,.2);
  border-radius: 3px;
`;

const UserInfoContainer = styled.div`
  display: inline-block;
  padding-left: 2rem;
  max-width: 30rem;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Heading2 = styled.h2`
  margin: auto 0;
`;

const CustomButton = styled.button`
  margin-right: 3rem;
  padding: 1rem 2rem;
  background-color: #fff;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 1.3rem;
`;

const UserDesc = styled.p`
  margin-top: 2rem;
`;

export default function UserInfo({editing, user, setEditing}){
  return (
    <Container>
      <Image src={user.userimage} verticalAlign='top' size="small" circular />
      <UserInfoContainer>     
        <Heading>
          <Heading2>{user.username}</Heading2>
          <ToggleButton user={user} editing={editing} setEditing={setEditing}/>
        </Heading>
        <UserDesc>{user.userdesc}</UserDesc>
      </UserInfoContainer>
    </Container>
  );
}


function ToggleButton({editing, user, setEditing}){
  return (
    <CustomButton onClick={()=> {
      if(editing) changeUserInfo(user, 1);
      setEditing(!editing);
    }}>
      {!editing?"Edit":"submit"}
    </CustomButton>
  )
}
