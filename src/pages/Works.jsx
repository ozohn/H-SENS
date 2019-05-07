import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import WorksEditor from './WorksEditor';
import fetchData from '../component/fetchData';
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
  const [works, setWorks] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchData(`${process.env.REACT_APP_SERVER_URL}/works`, 'POST', {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }).then(workInfo => {
      setWorks(workInfo);
    });
  }, []);

  return (
    <WorksContainer>
      <Heading2>PROJECTS</Heading2>
      {!editing ? (
        <WorksList works={works} setEditing={setEditing} editing={editing} />
      ) : (
        <WorksEditor setEditing={setEditing} editing={editing} setWorks={setWorks} />
      )}
    </WorksContainer>
  );
}
