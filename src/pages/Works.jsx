import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import WorksEditor from './WorksEditor';
import fetchData from '../component/fetchData';
import WorksList from './WorksList';

const Button = styled.button``;

export default function Works() {
  const [works, setWorks] = useState([]);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetchData(`${process.env.REACT_APP_SERVER_URL}/works`, 'POST', {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }).then(workInfo => {
      setWorks(workInfo);
    });
  }, []);

  return (
    <>
      <Button onClick={() => setCreating(!creating)}>create</Button>
      {!creating ? <WorksList works={works} /> : <WorksEditor />}
    </>
  );
}
