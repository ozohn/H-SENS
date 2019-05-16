import React from 'react';
import List from '../../container/list/List';
import Header from '../../container/header/header';
import WorkDetail from '../../container/work/WorkDetail';

const MainPage = () => {
  return (
    <>
      <Header />
      <WorkDetail />
      <List />
    </>
  );
};

export default MainPage;
