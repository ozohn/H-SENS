/* eslint-disable no-underscore-dangle */
// HTTP method
// restfulUrl best practice;, restAPI
import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';

import ListContainer from '../../presenter/layouts/ListContainer';
import fillArray from './fillArray';
import Line from './Line';
import { MainContext } from '../../../context/mainContext';

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

const StyledImage = styled.div`
  display: block;
  width: 100%;
  height: 42.5vh;
  transform: rotate(${props => (props.reverse ? '180deg' : '0')});
  background: no-repeat center / 80% url(${props => props.src});
`;

const ItemContainer = styled.div`
  height: 85vh;
  width: 25%;
  display: inline-block;
  background-color: #221e1f;
  transform: rotate(${props => (props.reverse ? '180deg' : '0')});
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 0px;
  }
`;

const QUERY = gql`
  {
    seeWorks {
      worktitle
      workimage
    }
  }
`;

export default function List() {
  const [pagenation, setPaging] = useState(1);
  const { data, loading } = useQuery(QUERY);
  console.log(data);
  // const [scroll, setScroll] = useState('');
  // const [lineWorks, setLineWorks] = useState({});
  // const [mainLoading, setMainLoading] = useState(true);
  // const mainContext = useContext(MainContext);
  // const { curData } = mainContext.state;
  // const { fetchWorkData, state } = mainContext;

  // useEffect(() => {
  //   if (curData === undefined) {
  //     setMainLoading(true);
  //     return;
  //   }
  //   const listNum = 24;
  //   const filledArr = fillArray(curData.works, listNum);
  //   setLineWorks({
  //     firLine: filledArr.slice(0, 6),
  //     secLine: filledArr.slice(6, 12),
  //     trdLine: filledArr.slice(12, 18),
  //     forthLine: filledArr.slice(18, 24),
  //   });
  //   setMainLoading(false);
  // }, [curData]);

  const handleNextBtn = async () => {
    setPaging(pagenation + 1);
    // setMainLoading(true);
    // if (mainLoading) {
    //   return;
    // }
    // await fetchWorkData('add');
    // await setMainLoading(false);
  };
  const handleBefBtn = async () => {
    setPaging(pagenation - 1);
    // setMainLoading(true);
    // if (mainLoading) {
    //   return;
    // }
    // await fetchWorkData('sub');
    // await setMainLoading(false);
  };
  // const multiScroll = e => {
  //   setScroll(e.target.scrollTop);
  // };

  return (
    <>
      <NextButton onClick={handleNextBtn}>Next</NextButton>
      <BefButton onClick={handleBefBtn} disabled={pagenation <= 1 ? 'disabled' : null}>
        Before
      </BefButton>
      <ListContainer>
        <ItemContainer>
          {!loading &&
            data.seeWorks.map((work, index) => (
              <StyledImage key="1" src={work.workimage} size="small" />
            ))}
        </ItemContainer>
        {/* {!mainLoading ? (
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
        )} */}
      </ListContainer>
    </>
  );
}
