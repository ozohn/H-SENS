import React from 'react';
import styled from 'styled-components';

const LogoutBtn = styled.button`
  position: absolute;
  top: 10%;
  left: 50%;
  border: 1px solid #fff;
`;

const Logout = () => {
  const logoutEvt = () => {
    window.localStorage.removeItem('token');
    window.location.replace(`${process.env.REACT_APP_CLIENT_URL}`);
  };

  return <LogoutBtn onClick={e => logoutEvt(e)}>logout</LogoutBtn>;
};

export default Logout;
