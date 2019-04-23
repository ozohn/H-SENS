import React from 'react';
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

const CardHeader = styled(Card.Header)`
  && {
    position: absolute;
    top: 1rem;
  }
`;
const CardDescription = styled(Card.Description)`
  && {
    position: absolute;
    top: 2.1rem;
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    line-height: 1.2rem;
    height: 3.5rem;
  }
`;

const AuthorContent = ({ user }) => {
  return (
    <>
      <CardHeader>{user.username}</CardHeader>
      <CardDescription>{user.userdesc}</CardDescription>
    </>
  );
};

export default AuthorContent;
