import React from 'react';
import styled from 'styled-components';
import SelectBoxComponent from './SelectBoxComponent';

const SelectorContainer = styled.div`
  position: relative;
  width: 15%;
  height: 100%;
  margin-left: 2.5%;
  &::after {
    position: absolute;
    top: 55%;
    right: 0;
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    transform: rotate(45deg);
    border-right: 0.2rem solid #011627;
    border-bottom: 0.2rem solid #011627;
  }
`;

const SelectBox = ({ handleChange, selected }) => {
  const selectorList = [
    {
      id: 1,
      title: 'Author',
      value: 'Author',
    },
    {
      id: 2,
      title: 'Works',
      value: 'Works',
    },
  ];

  return (
    <SelectorContainer>
      <SelectBoxComponent
        title="Choose"
        list={selectorList}
        handleChange={handleChange}
        selected={selected}
      />
    </SelectorContainer>
  );
};

export default SelectBox;
