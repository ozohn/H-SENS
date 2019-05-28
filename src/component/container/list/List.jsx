import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';

import ListContainer from '../../presenter/layouts/ListContainer';
import fillArray from './fillArray';
import Line from './Line';

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

const QUERY = gql`
  query seeWorks($index: Int!) {
    seeWorks(index: $index) {
      worktitle
      workimage
    }
  }
`;

export default function List() {
  const [pagenation, setPaging] = useState(1);
  const [workLists, setList] = useState([]);
  const { data, loading } = useQuery(QUERY);
  const [scroll, setScroll] = useState('');

  // const getList = useQuery(QUERY, {
  //   variables: {
  //     index: pagenation,
  //   },
  // });

  // const setWorkList = async index => {
  //   const list = await getList();

  //   return getList;
  //   // setList(workList);
  // };
  // console.log(data, loading);
  useEffect(() => {
    // const works = setWorkList(pagenation);
    const works = data.seeWorks;
    setList(fillArray({ arr: works, num: 24, targetNum: 6 }));
  }, []);

  const handleNextBtn = async () => {
    setPaging(pagenation + 1);
  };
  const handleBefBtn = async () => {
    setPaging(pagenation - 1);
  };
  const multiScroll = e => {
    setScroll(e.target.scrollTop);
  };

  return (
    <>
      <NextButton onClick={handleNextBtn}>Next</NextButton>
      <BefButton onClick={handleBefBtn} disabled={pagenation <= 1 ? 'disabled' : null}>
        Before
      </BefButton>
      <ListContainer onScroll={multiScroll}>
        {workLists.length &&
          workLists.map((workList, i) => (
            <Line key={i} works={workList} scroll={i % 2 && scroll} />
          ))}
      </ListContainer>
    </>
  );
}
