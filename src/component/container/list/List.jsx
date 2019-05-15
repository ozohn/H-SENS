/* eslint-disable no-underscore-dangle */
import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import ListContainer from '../../presenter/layouts/ListContainer';
import fillArray from './fillArray';
import Line from './Line';
import { MainContext } from '../../../context/main/mainContext';

const NextButton = styled.button`
  position: absolute;
  top: 10%;
  left: 30%;
  border: 1px solid #fff;
`;

const BefButton = styled.button`
  position: absolute;
  top: 10%;
  left: 25%;
  border: 1px solid #fff;
`;

const walkAni = keyframes`
  to { background-position: 100% 0; }
`;

const stroll = keyframes`
  from { transform: translateX(-100%) }
  to { transform: translateX(500%) };
`;

const LoaderContainer = styled.div`
  width: 100%;
  transform: translateY(50%);
`;
const MainLoader = styled.div`
  display: inline-block;
  position: relative;
  width: 20%;
  padding-bottom: 30%;
  vertical-align: middle;
  overflow: hidden;
  animation: ${stroll} 10s infinite linear;
`;

const Walking = styled.div`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(./image/walkImage.svg);
  background-repeat: no-repeat;
  background-size: 800%;
  animation: ${walkAni} 1s infinite steps(7);
`;

export default function List() {
  const [scroll, setScroll] = useState('');
  const [pageIndex, setPageIndex] = useState(1);
  const [lineWorks, setLineWorks] = useState({});
  const [mainLoading, setMainLoading] = useState(true);
  const mainContext = useContext(MainContext);
  const { works } = mainContext.state;
  const { dispatch, fetchWorkData, getWorks } = mainContext;

  useEffect(() => {
    if (works.length === 0) {
      setMainLoading(true);
      return;
    }
    const listNum = 24;
    const filledArr = fillArray(works, listNum);
    setLineWorks({
      firLine: filledArr.slice(0, 6),
      secLine: filledArr.slice(6, 12),
      trdLine: filledArr.slice(12, 18),
      forthLine: filledArr.slice(18, 24),
    });
    setMainLoading(false);
  }, [works]);

  const handleNextBtn = async () => {
    setMainLoading(true);
    if (mainLoading) {
      return;
    }
    const addIndex = pageIndex + 1;
    setPageIndex(addIndex);
    const data = fetchWorkData(addIndex);
    data.then(res => {
      dispatch(getWorks(res));
      setMainLoading(false);
    });
  };
  const handleBefBtn = () => {
    setMainLoading(true);
    if (mainLoading) {
      return;
    }
    const subIndex = pageIndex - 1;
    setPageIndex(subIndex);
    const data = fetchWorkData(subIndex);
    data.then(res => {
      dispatch(getWorks(res));
      setMainLoading(false);
    });
  };

  const multiScroll = e => {
    setScroll(e.target.scrollTop);
  };

  return (
    <>
      <NextButton onClick={handleNextBtn}>???</NextButton>
      <BefButton onClick={handleBefBtn}>???</BefButton>
      <ListContainer onScroll={multiScroll}>
        {!mainLoading ? (
          <>
            <Line works={lineWorks.firLine} />
            <Line works={lineWorks.secLine} scroll={scroll} reverse />
            <Line works={lineWorks.trdLine} />
            <Line works={lineWorks.forthLine} scroll={scroll} reverse />
          </>
        ) : (
          <LoaderContainer>
            <MainLoader>
              <Walking />
            </MainLoader>
          </LoaderContainer>
        )}
      </ListContainer>
    </>
  );
}
