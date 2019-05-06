/* eslint-disable no-underscore-dangle */
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';
import React, { useState } from 'react';
import { Viewer } from '@toast-ui/react-editor';
import fetchData from '../component/fetchData';

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
  width: ${props => (props.listView ? '100vw' : '0vw')};
  height: ${props => (props.listView ? '100vh' : '0vh')};
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

export default function WorksList({ works, setEditing, editing }) {
  const [workInfo, setWorkInfo] = useState({});
  const [listView, setListView] = useState(false);
  return (
    <>
      <Button onClick={() => setEditing(!editing)}>create</Button>
      <Works listView={listView}>
        <WorkView workInfo={workInfo} listView={listView} />
        {works.length &&
          works.map((work, index) => (
            <Work
              key={work._id}
              work={work}
              index={index}
              setWorkInfo={setWorkInfo}
              listView={listView}
              setListView={setListView}
            />
          ))}
      </Works>
    </>
  );
}

function Work({ work, setWorkInfo, index, listView, setListView }) {
  return (
    <ItemContainer
      onClick={() => {
        setListView(!listView);
        handleClick(work, setWorkInfo, listView, setListView);
      }}
      index={index}
    >
      <CustomImage src={work.workimage} verticalAlign="top" size="medium" />
    </ItemContainer>
  );
}

function WorkView({ workInfo, listView }) {
  return (
    <WorkCover listView={listView}>
      <h3>{workInfo.worktitle}</h3>
      <Viewer initialValue={workInfo.workdesc} previewStyle="vertical" height="600px" />
    </WorkCover>
  );
}
