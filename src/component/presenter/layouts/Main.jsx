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
  // const [mainLoading, setMainLoading] = useState();
  // useEffect(() => {
  //   fetchWorkData('init', setMainLoading);
  //   if (localStorage.getItem('token') === null) return;
  //   fetchUserData();
  // }, []);

  return isLoggedIn ? (
    <MainLoadingAni />
  ) : (
    <>
      <Header isLoggedIn={isLoggedIn} />
      {/* <WorkDetail /> */}
      <List />
    </>
  );
};

export default MainPage;
