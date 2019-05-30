import React from 'react';
import { withRouter } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';
import List from './list/List';
import Header from '../header/Header';
import WorkDetail from '../workDetail/WorkDetail';

const Main = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const MainPage = ({ match: { params } }) => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  return (
    <Main>
      <Header isLoggedIn={isLoggedIn} />
      {params.workid && <WorkDetail />}
      <List />
    </Main>
  );
};

export default withRouter(MainPage);
