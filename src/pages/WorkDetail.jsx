import React, { useContext } from 'react';
import styled from 'styled-components';
import { Viewer } from '@toast-ui/react-editor';
import { WorkContext } from '../context/work/workContext';

const WorkCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: all 0.2s ease-in-out;
  overflow-y: scroll;
  background: #fff;
  z-index: 9;
  background-color: #000;
`;

const WorkInformation = styled.div`
  width: 80vw;
  margin: 0 auto;
  background-color: #fff;
`;

export default function WorkDetail() {
  const { viewState } = useContext(WorkContext);
  const { worktitle, workimage, workdesc } = viewState;
  return (
    <WorkCover>
      <WorkInformation>
        <h3>{worktitle}</h3>
        <img src={workimage} alt="this work" />
        <Viewer initialValue={workdesc} previewStyle="vertical" height="600px" />
      </WorkInformation>
    </WorkCover>
  );
}
