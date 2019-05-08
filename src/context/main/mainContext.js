import React, { useReducer, useEffect } from 'react';
import fetchData from '../../component/fetchData';
import { mainReducer, getUserData, getWorks } from './mainReducer';

const MainContext = React.createContext();

const MainProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, []);
  useEffect(async () => {
    const fetchedWorkData = await fetchData(
      `${process.env.REACT_APP_SERVER_URL}/main/works`,
      'POST',
    );
    dispatch(getWorks(fetchedWorkData));

    const fetchedUserData = await fetchData(
      `${process.env.REACT_APP_SERVER_URL}/creator`,
      'POST',
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    );
    console.log(fetchedUserData);
    dispatch(getUserData(fetchedUserData));
  }, []);

  return (
    <MainContext.Provider value={{ state, dispatch }}>{children}</MainContext.Provider>
  );
};

export { MainProvider, MainContext };
