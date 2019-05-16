import React, { useReducer, useEffect } from 'react';
import { creatorReducer, fetchInitial, fetchEdit } from './creatorReducer';
import fetchData from '../../util/fetchData';

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
      userimage: userImage || state.user.userimage,
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
