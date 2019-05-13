import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
  color: #95bfb4;
  margin-left: 25rem;
  display: inline-block;
  vertical-align: bottom;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 3rem;
  font-weight: bold;
  color: #231f20;
  background-color: #55fe47;
  &:hover {
    color: #231f20;
  }
`;

const LinkButton = ({ pathname, state, text, cb }) => (
  <Button to={{ pathname, state }} onClick={cb}>
    {text}
  </Button>
);

export default LinkButton;
