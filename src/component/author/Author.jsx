/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import AuthorContent from './AuthorContent';
import AuthorLoader from './AuthorLoader';

const AuthorContainer = styled.div`
  margin-top: 1%;
  width: 100%;
  height: 25rem;
  overflow-x: auto;
  white-space: nowrap;
`;
const SameHeightImage = styled(Image)`
  &&& {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
`;
const CardContent = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 30%;
`;
const AuthorCard = styled.div`
  display: inline-block;
  width: 30%;
  height: 30%;
  margin-right: 1%;
`;
const Authors = ({ user, index }) => {
  if (!user.length === 0) {
    return <AuthorLoader />;
  }

  return (
    <AuthorCard index={index}>
      <ImageContainer>
        {user.userimage ? (
          <SameHeightImage src={user.userimage} />
        ) : (
          <SameHeightImage src="https://react.semantic-ui.com/images/wireframe/image.png" />
        )}
      </ImageContainer>
      <CardContent>
        <AuthorContent user={user} />
      </CardContent>
    </AuthorCard>
  );
};

export default function Author({ authors }) {
  return (
    <AuthorContainer>
      {authors ? (
        authors.map((author, i) => {
          return <Authors user={author} key={author.userdesc} index={i} />;
        })
      ) : (
        <Authors user={[]} />
      )}
    </AuthorContainer>
  );
}
