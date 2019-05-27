import styled from 'styled-components';
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import UserInfo from '../../container/user/UserInfo';
import Works from './Works';
import { MainContext } from '../../../context/mainContext';

const User = styled.div`
  position: relative;
  height: 200vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  font-weight: bold;
  ::-webkit-scrollbar {
    width: 0px;
  }
`;

function UserPage({
  match: {
    params: { userid },
  },
}) {
  return (
    <User>
      <UserInfo userid={userid} />
      {/* <Works userid={userid} /> */}
    </User>
  );
}

export default withRouter(UserPage);
