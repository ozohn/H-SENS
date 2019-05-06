import React, { useReducer, useEffect } from 'react';
import { creatorReducer, fetchInitial, fetchEdit } from './creatorReducer';
import fetchData from '../../component/fetchData';

const CreatorContext = React.createContext();

function Provider({ children }) {
  const [state, dispatch] = useReducer(creatorReducer, []);
  useEffect(() => {
    fetchData(`${process.env.REACT_APP_SERVER_URL}/creator`, 'POST', {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }).then(data => {
      dispatch(fetchInitial(data));
    });
  }, []);

  return (
    <CreatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CreatorContext.Provider>
  );
}

export { Provider, CreatorContext };
