import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const StyledSearchBtn = styled(Button)`
  width: 15%;
  height: 100%;
`;

const SearchBtn = ({ value }) => {
  return (
    <StyledSearchBtn
      content="검색"
      as={Link}
      to={{ pathname: '/searched', state: { value } }}
    />
  );
};

export default SearchBtn;
