import React, { useReducer, useEffect } from 'react';
import fetchData from '../../util/fetchData';
import {
  mainReducer,
  getUserData,
  filterChange,
  inputChange,
  getCurrentData,
  showWorkDetail,
  editUser,
} from './mainReducer';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, {
    pageIndex: 1,
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
  const fetchSearched = (selectedValue, searchValue) => {
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
    const res = fetchData(searchUrl, 'POST', jsonHeader, JSON.stringify(userData));
    return res;
  };

  useEffect(() => {
    fetchWorkData(state.pageIndex).then(res => dispatch(getCurrentData(res)));
    fetchUserData().then(res => {
      dispatch(getUserData(res));
    });
  }, []);

  function modifyUserInfo({ username, userdesc, userimage }) {
    console.log('hi');
    console.log(username, userdesc);
    const body = {
      username,
      userdesc,
      userimage: userimage || state.user.userimage,
    };
    
    fetchData(
      `${process.env.REACT_APP_SERVER_URL}/creator/edit`,
      'POST',
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      JSON.stringify(body),
    ).then(data => {
      dispatch(editUser(data));
    });
  }

  const handleSearchBtn = () => {
    const searchedData = fetchSearched(state.searchFilter, state.searchValue);
    searchedData.then(res => {
      dispatch(getCurrentData(res));
    });
  };
  const handleFilterChange = (e, { value }) => {
    dispatch(filterChange(value));
  };

  const handleInputChange = e => {
    dispatch(inputChange(e.target.value));
  };
  function showWork(work) {
    dispatch(showWorkDetail(work));
  }
  return (
    <MainContext.Provider
      value={{
        state,
        dispatch,
        fetchWorkData,
        showWork,
        handleFilterChange,
        handleInputChange,
        handleSearchBtn,
        showWorkDetail,
        modifyUserInfo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };
// V
