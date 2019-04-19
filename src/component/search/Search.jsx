import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
`;

const SearchInputer = styled.input`
  padding: 0;
  border: 0;
  border-bottom: 1px solid #bbb;
  outline: none;
  width: 50rem;
  height: 3rem;
  font-size: 1.6rem;
`;

const Selector = styled.div`
  width: 2rem;
  height: 2rem;
`;

const SearchBtn = styled.div`
  border: 1px solid #bbb;
  width: 8.4rem;
  height: 3rem;
`;

const Filter = styled.div`
  display: flex;
  height: 3rem;
`;

export default function Search() {
  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchInputer />
        <Selector />
        <SearchBtn />
      </SearchContainer>
      <Filter />
    </SearchWrapper>
  );
}
