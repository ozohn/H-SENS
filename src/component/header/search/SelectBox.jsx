import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import list from './SelectBoxList';

const SelectorContainer = styled.div`
  position: relative;
  width: 15%;
  height: 100%;
  margin-left: 2.5%;
`;

const Wrapper = styled.select`
  width: 100%;
  height: 100%;
  background-color: inherit;
  align-items: center;
  text-align: center;
  position: relative;
  outline: none;
`;
const Select = styled(Dropdown)`
  &&& {
    margin: 0;
    padding: 0;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    & div.default.text {
      display: inline-block;
      vertical-align: inherit;
      color: #000;
      padding: 0.5rem 0 0 0.7rem;
    }
  }
`;

const Filter = ({ selector, setSelector }) => {
  return (
    <SelectorContainer>
      <Select placeholder="Works" fluid selection options={list} />
    </SelectorContainer>
  );
};

export default Filter;
