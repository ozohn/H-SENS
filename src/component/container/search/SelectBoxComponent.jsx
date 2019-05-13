import React, { useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  height: 10vh;
  overflow: hidden;
  z-index: 99;
  background-color: #efffe9;
  border-bottom: 1px solid #011627;
  border-right: 1px solid #011627;
  border-left: 1px solid #011627;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #efffe9;
  align-items: center;
  text-align: center;
  position: relative;
`;

const List = styled.div`
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #011627;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.5rem;
  border-bottom: 1px solid #011627;
`;

const SelectBoxComponent = ({ title, list, handleChange, selected }) => {
  const [selectorOpen, setSelectorOpen] = useState(false);

  const selectorOpenHandler = (e, item) => {
    if (item) {
      handleChange(e, item);
    }
    setSelectorOpen(!selectorOpen);
  };

  return (
    <Wrapper onClick={selectorOpenHandler}>
      {selectorOpen ? (
        <>
          <Header>{selected || title}</Header>
          <ListContainer>
            {list.map(item => (
              <List key={item.id} onClick={e => selectorOpenHandler(e, item)}>
                {item.title}
              </List>
            ))}
          </ListContainer>
        </>
      ) : (
        <Header>{selected || title}</Header>
      )}
    </Wrapper>
  );
};

export default SelectBoxComponent;
