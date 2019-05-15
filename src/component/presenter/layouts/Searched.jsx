import React, { useEffect, useState, useContext } from 'react';
import Header from '../../container/header/header';
import SearchList from '../../container/searchList/SearchList';

import fetchData from '../../../util/fetchData';
import { MainContext } from '../../../context/main/mainContext';

const fetchSearched = async (selectedValue, searchValue) => {
  let searchUrl;
  if (selectedValue === 'Works') {
    searchUrl = `${process.env.REACT_APP_SERVER_URL}/search/work`;
  } else {
    searchUrl = `${process.env.REACT_APP_SERVER_URL}/search/author`;
  }
  const jsonHeader = {
    'Content-Type': 'application/json',
  };
  const userData = {
    inputValue: searchValue,
  };
  const res = await fetchData(searchUrl, 'POST', jsonHeader, JSON.stringify(userData));
  return res;
};

const Searched = () => {
  const { state } = useContext(MainContext);

  useEffect(() => {
    const searchedData = fetchSearched(state.searchFilter, state.searchValue);
    searchedData.then(res => {
      setCurData(res);
    });
  }, [state.searchValue, state.searchFilter]);

  return (
    <>
      <Header />
      <SearchList searchedData={curData} />
    </>
  );
};

export default Searched;
