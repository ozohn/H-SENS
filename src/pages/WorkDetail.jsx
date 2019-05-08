import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Viewer } from '@toast-ui/react-editor';
import { WorkContext } from '../context/work/workContext';

const WorkCover = styled.div`
  display: ${props => (props.target ? 'block' : 'none')};
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.2s ease-in-out;
  overflow-y: scroll;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.7);
`;

const WorkInformation = styled.div`
  width: 80vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`;

export default function WorkDetail() {
  const { state, showWork } = useContext(WorkContext);
  const target = state.filter(v => v.workview)[0];
  const { worktitle, workimage, workdesc } = target ? target : {};
  return (
    <WorkCover
      onClick={e => {
        if (e.target === e.currentTarget) {
          showWork(target);
        }
      }}
      target={target}
    >
      <WorkInformation>
        <h3>{worktitle}</h3>
        <img src={workimage} alt="this work" />
        <Viewer initialValue={workdesc} previewStyle="vertical" height="600px" />
      </WorkInformation>
    </WorkCover>
  );
}
