/* eslint-disable no-underscore-dangle */
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import React, { useState, useContext } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import fetchData from '../component/fetchData';
import { WorkContext } from '../context/work/workContext';

const Works = styled.ul`
  position: relative;
  top: 0;
  left: 0;
  margin-top: 10rem;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  height: 40vh;
  white-space: nowrap;
  padding: 0;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

const ItemContainer = styled.li`
  margin: 0;
  height: 100%;
  vertical-align: top;
  display: inline-block;
  overflow: hidden;
  cursor: pointer;
`;

const CustomImage = styled(Image)`
  &&& {
    height: 100%;
    width: auto;
  }
  &&&:hover {
    mix-blend-mode: luminosity;
  }
`;

const WorkCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: '100vw';
  height: '100vh';
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  background: #fff;
  z-index: 9;
`;

const Button = styled.button`
  margin-top: 2rem;
  border: 0;
  outline: none;
  font-size: 2.2rem;
  background-color: transparent;
  color: #ff4d4d;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #ff4d4d;
  }
  &&& {
    float: right;
  }
`;

export default function WorksList({ setEditing, editing }) {
  const { state, dispatch } = useContext(WorkContext);
  return (
    <>
      <Button onClick={() => setEditing(!editing)}>create</Button>
      <Works>
        {/* <WorkView /> */}
        {state && state.map(work => <Work key={work._id} work={work} />)}
      </Works>
    </>
  );
}

function Work({ work }) {
  return (
    <ItemContainer>
      <CustomImage src={work.workimage} verticalAlign="top" size="medium" />
    </ItemContainer>
  );
}

function WorkView({ workInfo }) {
  return (
    <WorkCover>
      <h3>{workInfo.worktitle}</h3>
      <Viewer initialValue={workInfo.workdesc} previewStyle="vertical" height="600px" />
    </WorkCover>
  );
}
