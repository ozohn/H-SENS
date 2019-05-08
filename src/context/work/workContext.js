import React, { useReducer, useEffect } from 'react';
import { workReducer, fetchInitial, fetchAdd, updateView } from './workReducer';
import { workDetailReducer, updateWork } from './workDetailReducer';
import fetchData from '../../component/fetchData';

const WorkContext = React.createContext();

function WorkProvider({ children }) {
  const [state, dispatch] = useReducer(workReducer, []);
  const [viewState, viewDispatch] = useReducer(workDetailReducer, {});
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

  function viewWork(workid) {
    const body = { workid };
    fetchData(
      `${process.env.REACT_APP_SERVER_URL}/works/view`,
      'POST',
      {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      JSON.stringify(body),
    ).then(data => viewDispatch(updateWork(data)));
  }

  function showWork(work) {
    dispatch(updateView(work));
  }

  return (
    <WorkContext.Provider
      value={{ state, dispatch, addWork, showWork, viewState, viewWork }}
    >
      {children}
    </WorkContext.Provider>
  );
}

export { WorkProvider, WorkContext };
