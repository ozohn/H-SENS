import React, { useEffect, useContext, useState } from 'react';
import List from '../../container/list/List';
import Header from '../../container/header/header';
import WorkDetail from '../../container/work/WorkDetail';
import MainLoadingAni from '../loaders/MainLoadingAni';
import { MainContext } from '../../../context/mainContext';

const MainPage = () => {
  const { fetchWorkData, fetchUserData } = useContext(MainContext);
  const [mainLoading, setMainLoading] = useState(true);
  useEffect(() => {
    fetchWorkData('init', setMainLoading);
    if (localStorage.getItem('token') === null) return;
    fetchUserData();
  }, []);

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
