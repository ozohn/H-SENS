import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSearchBtn = styled(Link)`
  &&& {
    display: flex;
    align-items: center;
    background: center / 80% url(./image/searchBtnHover.png) no-repeat;
    width: 10%;
    height: 100%;
    color: #011627;
    border-bottom: 1px solid #011627;
    transition: background 0.3s;
    margin-right: 2.5%;
  }
  &&&:hover {
    background: center/80% url(./image/searchBtn.png) no-repeat;
    transition: background 0.3s;
  }
`;

const SearchBtn = ({ value }) => {
  return <StyledSearchBtn as={Link} to={{ pathname: '/searched', state: { value } }} />;
};

export default SearchBtn;
