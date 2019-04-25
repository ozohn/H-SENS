import React, { useState } from 'react';
import styled from 'styled-components';
import Selector from './Selector';
import SearchBtn from './SearchBtn';

const SearchWrapper = styled.div`
  width: 60%;
`;
const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50%;
  margin: auto;
  align-items: center;
`;
const SearchInputer = styled.input`
  padding: 0;
  border: 0;
  border-bottom: 1px solid #bbb;
  outline: none;
  width: 65%;
  height: 100%;
  font-size: 1.6rem;
  margin-right: 5%;
`;

const Filter = styled.div`
  border: 1px solid #bbb;
  width: 100%;
  height: 100%;
`;
const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  align-items: center;
  margin: auto;
  margin-top: 1rem;
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
        <SearchInputer placeholder="입력해주세요" onChange={handleInputChange} />
        <Selector handleChange={handleSelectorChange} selectedValue={selectedValue} />
        <SearchBtn value={{ selectedValue, inputValue, authors, userImage }} />
      </SearchContainer>
      <FilterContainer>
        <Filter>이 부분은 filter가 들어갈 부분입니다.</Filter>
      </FilterContainer>
    </SearchWrapper>
  );
}
