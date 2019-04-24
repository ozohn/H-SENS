import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import React, { useState } from 'react';

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

const CustomImage = styled(Image)``;

function handleClick(work, setWorkInfo) {
  fetchData(
    `${process.env.REACT_APP_SERVER_URL}/works/add`,
    'POST',
    {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    JSON.stringify(body),
  );
}

export default function WorksList({ works }) {
  const [workInfo, setWorkInfo] = useState(null);
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
  return <>{workInfo}</>;
}
