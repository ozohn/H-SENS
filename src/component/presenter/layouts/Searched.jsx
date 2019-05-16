import React, { useContext } from 'react';
import Header from '../../container/header/header';
import SearchList from '../../container/searchList/SearchList';
import WorkDetail from '../../container/work/WorkDetail';
import { MainContext } from '../../../context/main/mainContext';

const Searched = () => {
  const { state } = useContext(MainContext);
  return (
    <>
      <Header />
      <WorkDetail />
      <SearchList searchedData={state.curData} />
    </>
  );
};

export default Searched;
