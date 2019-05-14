import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Header from '../../container/header/header';
import SearchList from '../../container/serachList/SearchList';

import fetchData from '../../../util/fetchData';
import { MainContext } from '../../../context/main/mainContext';

const fetchSearched = async (selectedValue, searchValue) => {
  let searchUrl;
  if (selectedValue === 'Author') {
    searchUrl = `${process.env.REACT_APP_SERVER_URL}/search/author`;
  } else if (selectedValue === 'Works') {
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

const Searched = ({ location }) => {
  const sentValue = location.state.value;
  const [curData, setCurData] = useState('');
  // const { state } = useContext(MainContext);

  useEffect(() => {
    const searchedData = fetchSearched(sentValue.selectedValue, sentValue.inputValue);
    searchedData.then(res => {
      setCurData(res);
    });
  }, [sentValue.inputValue]);

  return (
    <>
      <Header current={sentValue.selectedValue} />
      <SearchList searchedData={curData} />
    </>
  );
};

export default Searched;
