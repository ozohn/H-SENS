import React, { useContext } from 'react';
import styled from 'styled-components';

import Search from '../../container/search/Search';
import MainLogo from '../icons/MainLogo';
import UserLinkBtn from '../buttons/UserLinkBtn';
import { MainContext } from '../../../context/mainContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  border: 1px solid #bbb;
  border-top: 0.4rem solid #2EC4B6
  padding: 1%;
  height: 15vh;
  background-color: #EFFFE9
`;

const Header = () => {
  const { state, syncCurDataByUserData } = useContext(MainContext);
  const { user } = state;

  return (
    <HeaderContainer className="header">
      <MainLogo />
      <Search />
      <UserLinkBtn
        to={user.login ? '/user' : '/signin'}
        userimage={user.login ? user.userimage : null}
        onClick={() => syncCurDataByUserData()}
      />
    </HeaderContainer>
  );
};

export default Header;
