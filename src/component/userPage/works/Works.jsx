import styled from 'styled-components';
import React from 'react';
import { withRouter } from 'react-router-dom';
import WorksList from './WorksList';
import WorkDetail from '../../workDetail/WorkDetail';

const WorksContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 100vh;
  padding: 2rem 0;
  background-color: #1a1818;
`;

const Heading2 = styled.h2`
  display: inline-block;
  padding-left: 2rem;
  font-size: 5rem;
  color: #55fe47;
  letter-spacing: -2px;
  font-family: 'Gotham', san-serif;
  font-weight: bold;
`;

const Works = ({ match: { params }, works, userid }) => {
  return (
    <WorksContainer>
      <Heading2>works</Heading2>
      {params.workid && <WorkDetail />}
      <WorksList works={works} userid={userid} />
    </WorksContainer>
  );
};
export default withRouter(Works);
