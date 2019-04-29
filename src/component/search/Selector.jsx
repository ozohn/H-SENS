import React from 'react';
import styled from 'styled-components';
import SelectorC from './component';

const SelectorContainer = styled.div`
  width: 15%;
  height: 100%;
  margin-left: 2.5%;
`;

const Selector = ({ handleChange, selectedValue }) => {
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
      <SelectorC
        title="Choose"
        list={selectorList}
        handleChange={handleChange}
        selectedValue={selectedValue}
      />
    </SelectorContainer>
  );
};

export default Selector;
