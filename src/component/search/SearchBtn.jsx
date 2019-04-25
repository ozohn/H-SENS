import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBtn = styled(Link)`
  &&& {
    width: 15%;
    height: 100%;
    background-color: gray;
    color: black;
    border-radius: 1rem;
  }
`;

const SearchBtn = ({ value }) => {
  return (
    <StyledSearchBtn as={Link} to={{ pathname: '/searched', state: { value } }}>
      검색
    </StyledSearchBtn>
  );
};

export default SearchBtn;
