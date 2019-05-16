import React, { useContext } from 'react';
import Header from '../../container/header/header';
import SearchList from '../../container/searchList/SearchList';
import WorkDetail from '../../container/work/WorkDetail';
import { MainContext } from '../../../context/mainContext';

const Searched = () => {
  return (
    <>
      <Header />
      <WorkDetail />
      <SearchList />
    </>
  );
};

export default Searched;
