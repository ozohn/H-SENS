import React, { useReducer, useEffect } from 'react';
import fetchData from '../util/fetchData';
import {
  mainReducer,
  getUserData,
  filterChange,
  inputChange,
  getCurrentData,
  showWorkDetail,
  showSearchWorkDetail,
  editUser,
  fetchRemoveWork,
  fetchAddWork,
  fetchEditWork,
  fetchCreatorWorks,
  getSearchedData,
  getPreState,
  changeIndex,
  setSearchLoading,
} from './mainReducer';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, {
    pageIndex: 1,
    searchFilter: 'Works',
    curData: [],
    searchLoading: false,
    searchedData: [],
    user: { userInfo: {}, userWorks: {}, login: false },
  });
  const tokenInfo = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };
  const contentJson = {
    'Content-Type': 'application/json',
  };

  const changePageIndex = indexData => {
    const pageIndex = {
      init: 1,
      add: state.pageIndex + 1,
      sub: state.pageIndex - 1,
    };
    const indexNum = pageIndex[indexData];
    dispatch(changeIndex(indexNum));
    return indexNum;
  };

  const fetchWorkData = async (indexData, setLoader) => {
    const header = { ...contentJson };
    const body = { index: changePageIndex(indexData) };
    const data = await fetchData(
      `${process.env.REACT_APP_MAIN_WORKS}`,
      'POST',
      header,
      JSON.stringify(body),
    );
    if (setLoader) setLoader(false);
    dispatch(getCurrentData({ works: data }));
  };
  const fetchUserData = async () => {
    const header = { ...tokenInfo };
    const fetchedUserData = await fetchData(
      `${process.env.REACT_APP_CREATOR}`,
      'POST',
      header,
    );
    dispatch(getUserData(fetchedUserData));
  };
  const fetchSearched = (selectedValue, searchValue) => {
    const searchUrl = {
      Works: `${process.env.REACT_APP_SERVER_URL}/search/work`,
      Author: `${process.env.REACT_APP_SERVER_URL}/search/author`,
    };
    const header = { ...contentJson };
    const userData = { inputValue: searchValue };
    return fetchData(searchUrl[selectedValue], 'POST', header, JSON.stringify(userData));
  };
  const modifyUserInfo = ({ username, userdesc, userimage }) => {
    const header = {
      ...tokenInfo,
      ...contentJson,
    };
    const body = {
      username,
      userdesc,
      userimage: userimage || state.user.userimage,
    };
    fetchData(
      `${process.env.REACT_APP_SERVER_URL}/creator/edit`,
      'POST',
      header,
      JSON.stringify(body),
    ).then(data => {
      dispatch(editUser(data));
    });
  };
  const modifyWorkInfo = ({ workid, worktitle, workdesc, workimage }) => {
    const header = {
      ...tokenInfo,
      ...contentJson,
    };
    const body = {
      workid,
      worktitle,
      workdesc,
      workimage,
    };
    fetchData(
      `${process.env.REACT_APP_SERVER_URL}/works/edit`,
      'POST',
      header,
      JSON.stringify(body),
    ).then(data => {
      dispatch(fetchEditWork(data));
    });
  };
  const removeWork = ({ workid }) => {
    const header = {
      ...tokenInfo,
      ...contentJson,
    };
    const body = { workid };
    fetchData(
      `${process.env.REACT_APP_SERVER_URL}/works/remove`,
      'POST',
      header,
      JSON.stringify(body),
    ).then(data => {
      dispatch(fetchRemoveWork(data));
    });
  };
  const addWork = ({ worktitle, workdesc, workimage }) => {
    const header = {
      ...tokenInfo,
      ...contentJson,
    };
    const body = {
      worktitle,
      workimage,
      workdesc,
    };
    fetchData(
      `${process.env.REACT_APP_SERVER_URL}/works/add`,
      'POST',
      header,
      JSON.stringify(body),
    ).then(data => {
      dispatch(fetchAddWork(data));
    });
  };
  const getCreatorWorks = async userid => {
    const header = { ...contentJson };
    const body = { userid };
    const pageUrl = `${process.env.REACT_APP_SERVER_URL}/search/author/pages`;
    const creator = await fetchData(pageUrl, 'POST', header, JSON.stringify(body));
    dispatch(fetchCreatorWorks(creator));
  };
  const syncCurDataByUserData = () => {
    const UserObj = {
      user: state.user.userInfo,
      works: state.user.userWorks,
    };
    dispatch(getCurrentData(UserObj));
  };

  useEffect(() => {
    const preState = localStorage.getItem('data');
    dispatch(getPreState(JSON.parse(preState)));
  }, []);

  useEffect(() => {
    const stateObj = {
      curData: state.curData,
      searchedData: state.searchedData,
      user: state.user,
    };
    localStorage.setItem('data', JSON.stringify(stateObj));
  }, [state]);

  const handleSearchBtn = async () => {
    if (state.searchLoading) {
      return;
    }
    await dispatch(setSearchLoading(true));
    const searchedData = await fetchSearched(state.searchFilter, state.searchValue);
    dispatch(getSearchedData(searchedData));
    await dispatch(setSearchLoading(false));
  };
  const handleFilterChange = (e, { value }) => {
    dispatch(filterChange(value));
  };
  const handleInputChange = e => {
    dispatch(inputChange(e.target.value));
  };
  const showWork = (work, searched) => {
    if (searched) {
      dispatch(showSearchWorkDetail(work));
    }
    dispatch(showWorkDetail(work));
  };

  return (
    <MainContext.Provider
      value={{
        state,
        dispatch,
        fetchWorkData,
        fetchUserData,
        modifyWorkInfo,
        getCreatorWorks,
        showWork,
        handleFilterChange,
        handleInputChange,
        handleSearchBtn,
        modifyUserInfo,
        removeWork,
        addWork,
        syncCurDataByUserData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };
