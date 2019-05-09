import styled from 'styled-components';
import React from 'react';
import WorksList from './WorksList';
import WorkDetail from './WorkDetail';

const WorksContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 2rem 0;
  background-color: #1a1818;
`;

const Heading2 = styled.h2`
  display: inline-block;
  font-size: 7rem;
  color: #ff4d4d;
  border-bottom: 1px solid #ff4d4d;
`;

export default function Works() {
  return (
    <WorksContainer>
      <Heading2>PROJECTS</Heading2>
      <WorkDetail />
      <WorksList />
    </WorksContainer>
  );
}
