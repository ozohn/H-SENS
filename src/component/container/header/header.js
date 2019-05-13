import React, { useContext } from 'react';

import Search from '../search/Search';
import HeaderContainer from '../../presenter/layouts/HeaderContainer';
import MainLogo from '../../presenter/icons/MainLogo';
import UserLinkBtn from '../../presenter/buttons/UserLinkBtn';
import { MainContext } from '../../../context/main/mainContext';

const Header = ({ current }) => {
  const hasToken = !!window.localStorage.token;
  const mainContext = useContext(MainContext);
  const { user } = mainContext.state;

  return (
    <HeaderContainer className="header">
      <MainLogo />
      <Search current={current} />
      <UserLinkBtn
        to={hasToken ? '/user' : '/signin'}
        user={user ? user.userimage : user}
      />
    </HeaderContainer>
  );
};

export default Header;
