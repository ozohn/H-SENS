import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';
import { CreatorContext } from '../context/creator/creatorContext';

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

const CustomButton = styled(Link)`
  display: inline-block;
  color: #95bfb4;
  margin-right: 6rem;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 2.4rem;
  font-weight: bold;
  color: #231f20;
  background-color: #55fe47;
  letter-spacing: -1px;
  &:hover {
    color: #231f20;
  }
`;

export default function UserInfo() {
  const { state } = useContext(CreatorContext);
  const { userimage, userdesc, username } = state;
  return (
    <Container>
      <HeadingContainer>
        <Heading2>{username}</Heading2>
        <CustomButton
          to={{ pathname: '/usereditor', state: { submit: 'Edit', user: state } }}
        >
          Edit
        </CustomButton>
      </HeadingContainer>
      <ImageContainer src={userimage} verticalAlign="top" size="small" circular />
      <UserDesc>{userdesc}</UserDesc>
    </Container>
  );
}
