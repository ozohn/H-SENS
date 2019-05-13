import React, { useReducer, useEffect } from 'react';
import fetchData from '../../component/fetchData';
import { mainReducer, getUserData, getWorks } from './mainReducer';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, []);
  const fetchWorkData = async () => {
    const fetchedWorkData = await fetchData(
      `${process.env.REACT_APP_SERVER_URL}/main/works`,
      'POST',
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
    const workData = fetchWorkData();
    workData.then(res => dispatch(getWorks(res)));
    const userData = fetchUserData();
    userData.then(res => dispatch(getUserData(res)));
  }, []);

  return (
    <MainContext.Provider value={{ state, dispatch }}>{children}</MainContext.Provider>
  );
};

export { MainProvider, MainContext };
