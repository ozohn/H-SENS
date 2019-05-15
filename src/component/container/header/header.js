import React, { useContext } from 'react';

import Search from '../search/Search';
import HeaderContainer from '../../presenter/layouts/HeaderContainer';
import MainLogo from '../../presenter/icons/MainLogo';
import UserLinkBtn from '../../presenter/buttons/UserLinkBtn';
import { MainContext } from '../../../context/main/mainContext';

const Header = () => {
  const mainContext = useContext(MainContext);
  const { user } = mainContext.state;
  return (
    <HeaderContainer className="header">
      <MainLogo />
      <Search />
      <UserLinkBtn
        to={user ? '/user' : '/signin'}
        userimage={user ? user.userimage : null}
      />
    </HeaderContainer>
  );
};

export default Header;
