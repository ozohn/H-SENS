import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';

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

const User = styled.div`
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
      <User />
    </HeaderWrapper>
  );
};

export default Header;
