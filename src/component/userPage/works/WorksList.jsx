/* eslint-disable no-underscore-dangle */
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import Work from './Work';

const Works = styled.ul`
  position: absolute;
  top: 50%;
  left: 0;
  width: 50vh;
  height: 100vw;
  padding: 0;
  overflow-y: auto;
  overflow-x: scroll;
  transform: rotate(-90deg) translateX(30%) translateY(-50vh);
  transform-origin: right top;
  text-align: center;
  background-color: transparent;
  font-size: 0;
  margin: 0;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

const Button = styled(Link)`
  margin-top: 2rem;
  margin-right: 2rem;
  border: 0;
  outline: none;
  font-size: 2.2rem;
  background-color: transparent;
  color: #55fe47;
  cursor: pointer;
  &:hover {
    color: #55fe47;
  }
  &&& {
    float: right;
  }
`;

const QUERY = gql`
  {
    currentUser {
      userid
      userimage
    }
  }
`;

export default function WorksList({ works, userid }) {
  const {
    data: { currentUser },
  } = useQuery(QUERY);

  return (
    <>
      {currentUser && currentUser.userid === userid && (
        <Button to={{ pathname: `/${userid}/workeditor` }}>create</Button>
      )}
      <Works>
        {works.map(work => (
          <Work key={work.id} work={work} userid={userid} currentUser={currentUser} />
        ))}
      </Works>
    </>
  );
}
