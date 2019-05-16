import React, { useContext } from 'react';

import Search from '../search/Search';
import HeaderContainer from '../../presenter/layouts/HeaderContainer';
import MainLogo from '../../presenter/icons/MainLogo';
import UserLinkBtn from '../../presenter/buttons/UserLinkBtn';
import { MainContext } from '../../../context/main/mainContext';

const Header = () => {
  const { state, getCreatorWorks } = useContext(MainContext);
  const { user } = state;
  console.log(state);
  return (
    <HeaderContainer className="header">
      <MainLogo />
      <Search />
      <UserLinkBtn
        to={user.userInfo.username ? '/user' : '/signin'}
        userimage={user.userInfo.userimage ? user.userimage : null}
        onClick={() => getCreatorWorks(user.userInfo.userid)}
      />
    </HeaderContainer>
  );
};

export default Header;
