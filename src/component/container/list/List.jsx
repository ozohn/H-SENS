/* eslint-disable no-underscore-dangle */
import React, { useState, useContext, useEffect } from 'react';

import ListContainer from '../../presenter/layouts/ListContainer';
import fillArray from './fillArray';
import Line from './Line';
import { MainContext } from '../../../context/main/mainContext';

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