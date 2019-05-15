import React, { useReducer, useEffect } from 'react';
import {
  workReducer,
  fetchInitial,
  fetchAdd,
  fetchEdit,
  fetchRemove,
  updateView,
} from './workReducer';
import fetchData from '../../util/fetchData';
import { mainReducer, getUserData, getWorks } from './main/mainReducer';
import { creatorReducer, fetchInitial, fetchEdit } from './creator/creatorReducer';
import fetchData from '../../util/fetchData';

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
    ).then(data => {
      dispatch(fetchAdd(data));
    });
  }

  function showWork(work) {
    dispatch(updateView(work));
  }

  function modifyWorkInfo({ id, worktitle, workdesc, workimage }) {
    const body = {
      workid: id,
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
      dispatch(fetchEdit(data));
    });
  }

  function removeWork({ workid }) {
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
      dispatch(fetchRemove(data));
    });
  }

  return (
    <WorkContext.Provider
      value={{ state, dispatch, addWork, showWork, modifyWorkInfo, removeWork }}
    >
      {children}
    </WorkContext.Provider>
  );
}

export { WorkProvider, WorkContext };

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

const CreatorContext = React.createContext();

function CreatorProvider({ children }) {
  const [state, dispatch] = useReducer(creatorReducer, []);
  useEffect(() => {
    fetchData(`${process.env.REACT_APP_SERVER_URL}/creator`, 'POST', {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }).then(data => {
      dispatch(fetchInitial(data));
    });
  }, []);

  function modifyUserInfo({ userName, userDesc, userImage }) {
    const body = {
      username: userName,
      userdesc: userDesc,
      userimage: userImage || state.userimage,
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
      dispatch(fetchEdit(data));
    });
  }

  return (
    <CreatorContext.Provider value={{ state, dispatch, modifyUserInfo }}>
      {children}
    </CreatorContext.Provider>
  );
}

export { CreatorProvider, CreatorContext };
