import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  height: 25rem;
  width: 100%;
  display: flex;
  margin: 0 auto;
  margin-top: 50px;
`;
const Item = styled.div`
  flex: 1;
  padding: 1rem;
  border: 1px solid #bbb;
`;

export default function List() {
  return (
    <ListContainer>
      <Item />
      <Item />
      <Item />
      <Item />
    </ListContainer>
  );
}
