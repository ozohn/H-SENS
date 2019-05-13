import React, { useContext, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import Header from '../../container/header/header';

import fetchData from '../../../util/fetchData';
import { MainContext } from '../../../context/main/mainContext';

const fetchSearched = async (selectedValue, searchValue) => {
  let searchUrl;
  if (selectedValue === 'Author') {
    searchUrl = `${process.env.REACT_APP_SERVER_URL}/search/author`;
  } else if (selectedValue === 'Work') {
    searchUrl = `${process.env.REACT_APP_SERVER_URL}/search/work`;
  } else {
    return await new Promise(res => res('checkSelectBox'));
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
  // const { state } = useContext(MainContext);

  useEffect(() => {
    const searchedData = fetchSearched(sentValue.selectedValue, sentValue.inputValue);
    console.log(searchedData);
  }, [sentValue.inputValue]);

  return (
    <>
      <Header current={sentValue.selectedValue} />
    </>
  );
};

export default Searched;
