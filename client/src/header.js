import React from 'react';
import styled from 'styled-components';
import Search from './Search.jsx';

const HeaderWrapper = styled.header`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 8rem;
  align-items: center;
`;

const Logo = styled.div`
  border: 1px solid black;
  width: 10rem;
  height: 3rem;
`;

const User = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin-right: 3rem;
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
