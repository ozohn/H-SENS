import styled from 'styled-components';
import React, { useState } from 'react';
import WorksEditor from './WorksEditor';
import WorksList from './WorksList';

const WorksContainer = styled.div`
  position: fixed;
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
  const [editing, setEditing] = useState(false);

  return (
    <WorksContainer>
      <Heading2>PROJECTS</Heading2>
      {!editing ? (
        <WorksList setEditing={setEditing} editing={editing} />
      ) : (
        <WorksEditor setEditing={setEditing} editing={editing} />
      )}
    </WorksContainer>
  );
}
