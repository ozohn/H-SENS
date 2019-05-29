import React from 'react';
import styled from 'styled-components';
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
  background-color: #efffe9;
  align-items: center;
  text-align: center;
  position: relative;
  outline: none;
`;

const List = styled.option`
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #011627;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectBox = ({ selector, setSelector }) => {
  return (
    <SelectorContainer>
      <Wrapper value={selector} onChange={e => setSelector(e.target.value)}>
        {list.map(item => (
          <List key={item.id} value={item.value}>
            {item.value}
          </List>
        ))}
      </Wrapper>
    </SelectorContainer>
  );
};

export default SelectBox;
