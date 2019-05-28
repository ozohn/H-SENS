import React, { useEffect, useContext, useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import List from '../../container/list/List';
import Header from './Header';
import WorkDetail from '../../container/work/WorkDetail';
import MainLoadingAni from '../loaders/MainLoadingAni';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const MainPage = () => {
  const {
    data: { isLoggedIn },
  } = useQuery(QUERY);

  // return isLoggedIn ? (
  //   <MainLoadingAni />
  // ) :
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {/* <WorkDetail /> */}
      <List />
    </>
  );
};

export default MainPage;
