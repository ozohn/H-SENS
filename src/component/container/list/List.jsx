/* eslint-disable no-underscore-dangle */
import React, { useState, useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

import { MainContext } from '../../../context/main/mainContext';

const StyledImage = styled(Image)`
  &&& {
    width: 100%;
    height: 28.3vh;
    transform: rotate(${props => (props.reverse ? '180deg' : '0')});
  }
`;
const ListContainer = styled.div`
  height: 85vh;
  width: 100%;
  margin: 0 auto;
  overflow-y: scroll;
`;
const Item = styled.div`
  height: 85vh;
  width: 25%;
  border: 1px solid #bbb;
  display: inline-block;

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
  }
`;

// transform: ${props =>
//   props.reverse ? `rotate(180deg) translateY(-${props.height * 2}px)` : ''}}
const fillArray = (arr, num) => {
  if (arr === undefined) return [];
  const checkingArr = [...arr];
  let i = 0;
  while (checkingArr.length < num) {
    checkingArr.push({ _id: i });
    i += 1;
  }
  return checkingArr;
};

const Line = ({ works, scroll, reverse }) => {
  const sourse = 'https://react.semantic-ui.com/images/wireframe/image.png';
  const scrollEl = useRef(null);
  useEffect(() => {
    if (scrollEl.current === null) return;
    scrollEl.current.style.transform = `rotate(180deg) translateY(-${scroll * 2}px)`;
  }, [scroll]);

  if (reverse) {
    return (
      <Item ref={scrollEl} reverse>
        {works.map(v => {
          return v.workimage === undefined ? (
            <StyledImage key={v._id} src={sourse} size="small" reverse />
          ) : (
            <StyledImage key={v._id} src={v.workimage} size="small" reverse />
          );
        })}
      </Item>
    );
  }
  return (
    <Item>
      {works.map(v => {
        return v.workimage === undefined ? (
          <StyledImage key={v._id} src={sourse} size="small" />
        ) : (
          <StyledImage key={v._id} src={v.workimage} size="small" />
        );
      })}
    </Item>
  );
};

export default function List() {
  const [scroll, setScroll] = useState('');
  const [lineWorks, setLineWorks] = useState({});
  const mainContext = useContext(MainContext);
  const { works } = mainContext.state;

  useEffect(() => {
    const listNum = 24;
    const filledArr = fillArray(works, listNum);
    setLineWorks({
      firLine: filledArr.slice(0, 6),
      secLine: filledArr.slice(6, 12),
      trdLine: filledArr.slice(12, 18),
      forthLine: filledArr.slice(18, 24),
    });
  }, [works]);

  const multiScroll = e => {
    setScroll(e.target.scrollTop);
  };
  return (
    <ListContainer onScroll={multiScroll}>
      {works !== undefined ? (
        <>
          <Line works={lineWorks.firLine} />
          <Line works={lineWorks.secLine} scroll={scroll} reverse />
          <Line works={lineWorks.trdLine} />
          <Line works={lineWorks.forthLine} scroll={scroll} reverse />
        </>
      ) : (
        <></>
      )}
    </ListContainer>
  );
}
