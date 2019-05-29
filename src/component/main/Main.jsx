import React from 'react';
import { withRouter } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import List from './list/List';
import Header from '../header/Header';
import WorkDetail from '../workDetail/WorkDetail';
// import MainLoadingAni from './MainLoadingAni';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const MainPage = ({ match: { params } }) => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  // return isLoggedIn ? (
  //   <MainLoadingAni />
  // ) :
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {params.workid && <WorkDetail />}
      <List />
    </>
  );
};

export default withRouter(MainPage);
