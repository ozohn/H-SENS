import React from 'react';
import styled from 'styled-components';
import { Dropdown, Button } from 'semantic-ui-react';

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
const Selector = styled(Dropdown)`
  &&& {
    width: 15%;
    height: 100%;
    margin-right: 5%;
  }
`;
const SearchBtn = styled(Button)`
  width: 15%;
  height: 100%;
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

export default function Search() {
  const searchOptions = [
    {
      key: '작가',
      text: '작가',
      value: '작가',
    },
    {
      key: '작품',
      text: '작품',
      value: '작품',
    },
  ];
  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchInputer placeholder="검색할 단어를 입력하세요" />
        <Selector
          placeholder="작가"
          color="#bbb"
          fluid
          selection
          options={searchOptions}
        />
        <SearchBtn basic color="#bbb">
          검색
        </SearchBtn>
      </SearchContainer>
      <FilterContainer>
        <Filter>
          <div>something</div>
        </Filter>
      </FilterContainer>
    </SearchWrapper>
  );
}
