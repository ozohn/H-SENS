import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import styled from 'styled-components';
import Search from './component/search/Search.jsx';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
  height: 8rem;
`;

const Logo = styled.div`
  border: 1px solid #bbb;
  width: 10rem;
  height: 3rem;
`;

const LinkStyled = styled(Link)`
  border: 1px solid #bbb;
  border-radius: 50%;
  width: 4.5rem;
  height: 4.5rem;
`;

const Header = () => {
  return (
    <HeaderWrapper className="header">
      <Logo />
      <Search />
      <LinkStyled to='/signin'></LinkStyled>
    </HeaderWrapper>
  );
};

export default Header;
