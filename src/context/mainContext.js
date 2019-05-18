import React, { useReducer, useEffect } from 'react';
import fetchData from '../util/fetchData';
import {
  mainReducer,
  getUserData,
  filterChange,
  inputChange,
  getCurrentData,
  showWorkDetail,
  editUser,
  fetchRemoveWork,
  fetchAddWork,
  fetchEditWork,
  fetchCreatorWorks,
  getSearchedData,
  getPreState,
  changeIndex,
} from './mainReducer';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, {
    pageIndex: 1,
    searchFilter: 'Works',
    curData: [],
    searchedData: [],
    user: { userInfo: {}, userWorks: {} },
  });
  const addIndex = () => {
    const addedIndex = state.pageIndex + 1;
    dispatch(changeIndex(addedIndex));
    return addedIndex;
  };
  const subIndex = () => {
    const subedIndex = state.pageIndex - 1;
    dispatch(changeIndex(subedIndex));
    return subedIndex;
  };
  const initIndex = () => {
    dispatch(changeIndex(1));
    return 1;
  };
  const fetchWorkData = async (indexData, setLoader) => {
    let indexNum;
    if (indexData === 'init') {
      indexNum = await initIndex();
    }
    if (indexData === 'add') {
      indexNum = await addIndex();
    }
    if (indexData === 'sub') {
      indexNum = await subIndex();
    }
    const body = { index: indexNum };
    const jsonHeader = { 'Content-Type': 'application/json' };
    const data = await fetchData(
      `${process.env.REACT_APP_MAIN_WORKS}`,
      'POST',
      jsonHeader,
      JSON.stringify(body),
    );
    if (setLoader) {
      setLoader(false);
    }
    dispatch(getCurrentData({ works: data }));
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
    console.log('userDataFetched');
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
    console.log('dataSearched');
    return res;
  };
  const modifyUserInfo = ({ username, userdesc, userimage }) => {
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
  };
  const modifyWorkInfo = ({ workid, worktitle, workdesc, workimage }) => {
    const body = {
      workid,
      worktitle,
      workdesc,
      workimage,
    };
    fetchData(
      `${process.env.REACT_APP_SERVER_URL}/works/edit`,
      'POST',
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      JSON.stringify(body),
    ).then(data => {
      dispatch(fetchEditWork(data));
    });
  };
  const removeWork = ({ workid }) => {
    const body = { workid };
    fetchData(
      `${process.env.REACT_APP_SERVER_URL}/works/remove`,
      'POST',
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      JSON.stringify(body),
    ).then(data => {
      dispatch(fetchRemoveWork(data));
    });
  };
  const addWork = ({ worktitle, workdesc, workimage }) => {
    const body = {
      worktitle,
      workimage,
      workdesc,
    };
    fetchData(
      `${process.env.REACT_APP_SERVER_URL}/works/add`,
      'POST',
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      JSON.stringify(body),
    ).then(data => {
      dispatch(fetchAddWork(data));
    });
  };
  const getCreatorWorks = userid => {
    const jsonHeader = {
      'Content-Type': 'application/json',
    };
    const body = {
      userid,
    };
    const pageUrl = `${process.env.REACT_APP_SERVER_URL}/search/author/pages`;
    const res = fetchData(pageUrl, 'POST', jsonHeader, JSON.stringify(body));
    res.then(creator => {
      console.log('getCreatorWorks');
      dispatch(fetchCreatorWorks(creator));
    });
  };

  useEffect(() => {
    if (localStorage.getItem('token') === null) return;
    fetchUserData().then(res => dispatch(getUserData(res)));
  }, []);

  useEffect(() => {
    console.log('historyChange');
    const preState = localStorage.getItem('data');
    dispatch(getPreState(JSON.parse(preState)));
  }, []);

  useEffect(() => {
    const stateObj = {
      curData: state.curData,
      searchedData: state.searchedData,
      user: state.user,
    };
    console.log(state.pageIndex);
    localStorage.setItem('data', JSON.stringify(stateObj));
  }, [state]);

  const handleSearchBtn = () => {
    const searchedData = fetchSearched(state.searchFilter, state.searchValue);
    searchedData.then(res => {
      dispatch(getSearchedData(res));
    });
  };
  const handleFilterChange = (e, { value }) => {
    dispatch(filterChange(value));
  };
  const handleInputChange = e => {
    dispatch(inputChange(e.target.value));
  };
  const showWork = work => {
    dispatch(showWorkDetail(work));
  };

  return (
    <MainContext.Provider
      value={{
        initIndex,
        addIndex,
        subIndex,
        state,
        dispatch,
        fetchWorkData,
        modifyWorkInfo,
        getCreatorWorks,
        showWork,
        handleFilterChange,
        handleInputChange,
        handleSearchBtn,
        modifyUserInfo,
        removeWork,
        addWork,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };
// V
