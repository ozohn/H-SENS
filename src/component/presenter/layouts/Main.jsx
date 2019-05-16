import React, { useEffect, useContext } from 'react';
import List from '../../container/list/List';
import Header from '../../container/header/header';
import WorkDetail from '../../container/work/WorkDetail';
import { MainContext } from '../../../context/main/mainContext';

const MainPage = () => {
  const { fetchWorkData } = useContext(MainContext);
  useEffect(() => {
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
