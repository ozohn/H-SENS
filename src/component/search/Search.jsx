import React, { useState } from 'react';
import styled from 'styled-components';
import Selector from './Selector';
import SearchBtn from './SearchBtn';

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

export default function Search({ authors, userImage }) {
  const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSelectorChange = (e, { value }) => {
    setSelectedValue(value);
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchInputer placeholder="which? who?" onChange={handleInputChange} />
        <SearchBtn value={{ selectedValue, inputValue, authors, userImage }} />
        <Line />
        <Selector handleChange={handleSelectorChange} selectedValue={selectedValue} />
      </SearchContainer>
    </SearchWrapper>
  );
}
