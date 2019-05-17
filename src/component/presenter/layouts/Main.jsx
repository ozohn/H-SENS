import React, { useEffect, useContext, useState } from 'react';
import List from '../../container/list/List';
import Header from '../../container/header/header';
import WorkDetail from '../../container/work/WorkDetail';
import MainLoadingAni from '../../presenter/loaders/MainLoadingAni';
import { MainContext } from '../../../context/mainContext';

const MainPage = () => {
  const { fetchWorkData } = useContext(MainContext);
  const [mainLoading, setMainLoading] = useState(true);
  useEffect(() => {
    fetchWorkData('init', setMainLoading);
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
