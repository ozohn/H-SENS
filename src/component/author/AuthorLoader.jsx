import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  width: 10%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: spin 2s linear infinite;
  background-image: url(./image/loader.png);
`;
const AuthorLoader = () => {
  return <Loader />;
};

export default AuthorLoader;
