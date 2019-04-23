import styled from 'styled-components';
import React from 'react';
import WorksEditor from './WorksEditor';

const Button = styled.button``;
const WorksWrapper = styled.div``;
const WorksContainer = styled.div``;
const Work = styled.div``;

export default function Works() {
  return (
    <WorksWrapper>
      <Button>create</Button>
      <WorksContainer>
        <Work />
      </WorksContainer>
      <WorksEditor />
    </WorksWrapper>
  );
}
