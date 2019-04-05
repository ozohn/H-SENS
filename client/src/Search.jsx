import React from "react";
import styled from "styled-components";

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

const FilterWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  height:3rem;
`;

export default function Search() {
  return (
    <>
      <SearchWrapper>
        <SearchInputer />
        <Selector />
        <SearchBtn />
      </SearchWrapper>
      <FilterWrapper />
    </>
  );
}
