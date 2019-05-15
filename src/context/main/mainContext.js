import React, { useReducer, useEffect } from 'react';
import fetchData from '../../util/fetchData';
import { mainReducer, getUserData, getWorks } from './mainReducer';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, { index: 0, works: [] });
  const fetchWorkData = pageIndex => {
    const body = { index: pageIndex };
    const jsonHeader = {
      'Content-Type': 'application/json',
    };
    const fetchedWorkData = fetchData(
      `${process.env.REACT_APP_SERVER_URL}/main/works`,
      'POST',
      jsonHeader,
      JSON.stringify(body),
    );
    return fetchedWorkData;
  };
  const fetchUserData = async () => {
    const fetchedUserData = await fetchData(
      `${process.env.REACT_APP_SERVER_URL}/creator`,
      'POST',
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    );
    if (typeof fetchedUserData === 'string') {
      return undefined;
    }
    return fetchedUserData;
  };
  useEffect(() => {
    const userWork = fetchWorkData(1);
    userWork.then(res => dispatch(getWorks(res)));
    const userData = fetchUserData();
    userData.then(res => dispatch(getUserData(res)));
  }, []);

  return (
    <MainContext.Provider value={{ state, dispatch, fetchWorkData, getWorks }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, MainContext };
