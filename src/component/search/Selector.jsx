import React from 'react';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

const StyledSelector = styled(Dropdown)`
  &&& {
    width: 15%;
    height: 100%;
    margin-right: 5%;
  }
`;

const Selector = ({ handleChange, selectedValue }) => {
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
    <StyledSelector
      placeholder="Select"
      onChange={handleChange}
      fluid
      selection
      options={searchOptions}
      value={selectedValue}
    />
  );
};

export default Selector;
