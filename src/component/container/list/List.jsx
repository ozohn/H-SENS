/* eslint-disable no-underscore-dangle */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';

import ListContainer from '../../presenter/layouts/ListContainer';
import fillArray from './fillArray';
import Line from './Line';
import { MainContext } from '../../../context/main/mainContext';

const Button = styled.button`
  position: absolute;
  top: 10%;
  left: 50%;
  background-color: #000;
`;
export default function List() {
  const [scroll, setScroll] = useState('');
  const [pageIndex, setPageIndex] = useState(0);
  const [lineWorks, setLineWorks] = useState({});
  const mainContext = useContext(MainContext);
  const { works } = mainContext.state;
  const { dispatch, fetchWorkData, getWorks } = mainContext;

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

  const handleClick = () => {
    const data = fetchWorkData(pageIndex);
    data.then(res => {
      dispatch(getWorks(res));
    });
    setPageIndex(pageIndex + 1);
  };

  const multiScroll = e => {
    setScroll(e.target.scrollTop);
  };

  return (
    <>
      <Button onClick={handleClick}>UP</Button>
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
    </>
  );
}
