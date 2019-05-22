import React, { useContext } from 'react';
import styled from 'styled-components';
import SelectBox from './SelectBox';
import SearchBtn from './SearchBtn';
import { MainContext } from '../../../context/mainContext';

const SearchWrapper = styled.div`
  width: 60%;
  height: 60%;
`;
const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
  align-items: center;
`;
const SearchInputer = styled.input`
  padding: 0;
  border: 0;
  color: #011627;
  background-color: #efffe9;
  border-bottom: 1px solid #011627;
  outline: none;
  width: 65%;
  height: 100%;
  font-size: 1.6rem;
`;
const Line = styled.div`
  border-right: 1px solid #011627;
  height: 65%;
`;

export default function Search() {
  const { handleInputChange } = useContext(MainContext);

  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchInputer placeholder="which? who?" onChange={handleInputChange} />
        <SearchBtn />
        <Line />
        <SelectBox />
      </SearchContainer>
    </SearchWrapper>
  );
}
