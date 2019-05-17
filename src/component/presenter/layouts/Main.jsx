import React, { useEffect, useContext } from 'react';
import List from '../../container/list/List';
import Header from '../../container/header/header';
import WorkDetail from '../../container/work/WorkDetail';
import { MainContext } from '../../../context/mainContext';

const MainPage = () => {
  const { fetchWorkData, initIndex } = useContext(MainContext);
  useEffect(() => {
    initIndex();
    fetchWorkData();
  }, []);

  return (
    <>
      <Header />
      <WorkDetail />
      <List />
    </>
  );
};

export default MainPage;
