import React, { useEffect, useContext, useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import List from '../../container/list/List';
import Header from './Header';
import WorkDetail from '../../container/work/WorkDetail';
import MainLoadingAni from '../loaders/MainLoadingAni';
import { MainContext } from '../../../context/mainContext';

const QUERY = gql`
  {
    seeWorks {
      worktitle
      workimage
    }
  }
`;

const MainPage = () => {
  const { data } = useQuery(QUERY);
  const [mainLoading, setMainLoading] = useState(false);
  // useEffect(() => {
  //   fetchWorkData('init', setMainLoading);
  //   if (localStorage.getItem('token') === null) return;
  //   fetchUserData();
  // }, []);

  return mainLoading ? (
    <MainLoadingAni />
  ) : (
    <>
      <Header />
      <WorkDetail />
      <List />
    </>
  );
};

export default MainPage;
