import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import Search from '../search/Search';

const HeaderWrapper = styled.header`
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

const Logo = styled.div`
  border: 1px solid #011627;
  width: 15%;
  height: 80%;
`;

const LinkStyled = styled(Link)`
  display:block;
  background-image: url("${props => props.user || './image/blank.png'}");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #011627;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
`;

const Header = ({ user }) => {
  const hasToken = !!window.localStorage.token;
  return (
    <HeaderWrapper className="header">
      <Logo />
      <Search />
      <LinkStyled
        to={hasToken ? '/user' : '/signin'}
        user={user ? user.userimage : user}
      />
    </HeaderWrapper>
  );
};

export default Header;
