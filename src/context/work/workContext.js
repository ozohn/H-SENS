import React, { useReducer, useEffect } from 'react';
import { workReducer, fetchInitial, fetchAdd } from './workReducer';
import fetchData from '../../component/fetchData';

const WorkContext = React.createContext();

function WorkProvider({ children }) {
  const [state, dispatch] = useReducer(workReducer, []);
  useEffect(() => {
    fetchData(`${process.env.REACT_APP_SERVER_URL}/works`, 'POST', {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }).then(data => {
      dispatch(fetchInitial(data));
    });
  }, []);

  function addWork({ worktitle, workdesc, workimage }) {
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
    ).then(data => dispatch(fetchAdd(data)));
  }

  return (
    <WorkContext.Provider value={{ state, dispatch, addWork }}>
      {children}
    </WorkContext.Provider>
  );
}

export { WorkProvider, WorkContext };
