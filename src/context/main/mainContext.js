import React, { useReducer, useEffect } from 'react';
import fetchData from '../../util/fetchData';
import {
  mainReducer,
  getUserData,
  getWorks,
  filterChange,
  inputChange,
} from './mainReducer';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, {
    pageIndex: 1,
    works: [],
    searchFilter: 'Works',
    curData: [],
  });
  const fetchWorkData = pageIndex => {
    const body = { index: pageIndex };
    const jsonHeader = { 'Content-Type': 'application/json' };
    const fetchedWorkData = fetchData(
      `${process.env.REACT_APP_MAIN_WORKS}`,
      'POST',
      jsonHeader,
      JSON.stringify(body),
    );
    return fetchedWorkData;
  };
  const fetchUserData = () => {
    const tokenHeader = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    const fetchedUserData = fetchData(
      `${process.env.REACT_APP_CREATOR}`,
      'POST',
      tokenHeader,
    );
    return fetchedUserData;
  };
  useEffect(() => {
    fetchWorkData(state.pageIndex).then(res => dispatch(getWorks(res)));
    fetchUserData().then(res => {
      dispatch(getUserData(res));
    });
  }, []);

  const handleFilterChange = (e, { value }) => {
    dispatch(filterChange(value));
  };

  const handleInputChange = e => {
    dispatch(inputChange(e.target.value));
  };

  return (
    <MainContext.Provider
      value={{
        state,
        dispatch,
        fetchWorkData,
        getWorks,
        handleFilterChange,
        handleInputChange,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };
// V
