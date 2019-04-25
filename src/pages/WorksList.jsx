/* eslint-disable no-underscore-dangle */
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import React, { useState } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import fetchData from '../component/fetchData';

const Works = styled.ul`
  position: relative;
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

const WorkCover = styled.div``;

function handleClick(work, setWorkInfo) {
  const body = {
    workid: work._id,
  };
  fetchData(
    `${process.env.REACT_APP_SERVER_URL}/works/view`,
    'POST',
    {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    JSON.stringify(body),
  ).then(workInfo => {
    setWorkInfo(workInfo);
  });
}

export default function WorksList({ works }) {
  const [workInfo, setWorkInfo] = useState({});
  return (
    <>
      <WorkView workInfo={workInfo} />
      <Works>
        {works.map((work, index) => (
          <Work key={work._id} work={work} index={index} setWorkInfo={setWorkInfo} />
        ))}
      </Works>
    </>
  );
}

function Work({ work, setWorkInfo, index }) {
  return (
    <ItemContainer
      onClick={() => handleClick(work, setWorkInfo)}
      index={index}
      setWorkInfo={setWorkInfo}
    >
      <CustomImage src={work.workimage} verticalAlign="top" size="medium" />
    </ItemContainer>
  );
}

function WorkView({ workInfo }) {
  return (
    <WorkCover>
      <Viewer initialValue={workInfo.workdesc} previewStyle="vertical" height="600px" />
      <h3>{workInfo.worktitle}</h3>
      <p>{workInfo.workdesc}</p>
    </WorkCover>
  );
}
