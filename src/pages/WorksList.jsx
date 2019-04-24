import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import React, { useState } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import fetchData from '../component/fetchData';

const Works = styled.ul`
  padding-top: 10rem;
`;

const ItemContainer = styled.li`
  margin-bottom: 5rem;
  vertical-align: top;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const CustomImage = styled(Image)`
  &&&:hover {
    mix-blend-mode: luminosity;
  }
`;

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
    <Works>
      {works.map(work => (
        <Work key={work._id} work={work} setWorkInfo={setWorkInfo} />
      ))}
      <WorkView workInfo={workInfo} />
    </Works>
  );
}

function Work({ work, setWorkInfo }) {
  return (
    <ItemContainer
      onClick={() => handleClick(work, setWorkInfo)}
      setWorkInfo={setWorkInfo}
    >
      <CustomImage src={work.workimage} verticalAlign="top" size="medium" />
    </ItemContainer>
  );
}

function WorkView({ workInfo }) {
  return (
    <>
      <Viewer initialValue={workInfo.workdesc} previewStyle="vertical" height="600px" />
      <h3>{workInfo.worktitle}</h3>
      <p>{workInfo.workdesc}</p>
    </>
  );
}
