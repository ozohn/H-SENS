import React from 'react';
import styled from 'styled-components';

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
  margin: 0.5rem;
`;

const SearchWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  width: 70rem;
  height: 3rem;
  margin: auto;
  align-items: center;
`;

const Selector = styled.div`
  border: 1px solid black;
  width: 10rem;
  height: 2rem;
`;

const SearchInputer = styled.input`
  border: 1px solid black;
  width: 40rem;
  height: 2rem;
  padding: 0;
`;

const SearchBtn = styled.div`
  border: 1px solid black;
  width: 2rem;
  height: 1rem;
`;

const User = styled.div`
  border: 1px solid black;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin-right: 3rem;
`;
const SearchContainer = styled.div``;
const FilterWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  height:3rem;
`;

const Header = () => {
  return (
    <HeaderWrapper className="header">
      <Logo />
      <SearchContainer>
        <SearchWrapper>
          <SearchInputer />
          <Selector />
          <SearchBtn />
        </SearchWrapper>
        <FilterWrapper />
      </SearchContainer>
      <User />
    </HeaderWrapper>
  );
};

export default Header;
