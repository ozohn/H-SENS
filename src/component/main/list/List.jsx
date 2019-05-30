import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';

import Logout from '../logout/Logout';
import ListContainer from './ListContainer';
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
      id
      worktitle
      workimage
    }
  }
`;

const List = () => {
  const [pagenation, setPaging] = useState(1);
  const [workLists, setList] = useState([]);
  const [bLastPage, setBLastPage] = useState(false);
  const { data, loading } = useQuery(QUERY, {
    variables: { index: pagenation },
  });
  const [scroll, setScroll] = useState('');
  useEffect(() => {
    if (loading) return;
    const works = data.seeWorks;
    !works[24] ? setBLastPage(true) : setBLastPage(false);
    setList(fillArray({ arr: works, num: 24, targetNum: 6 }));
  }, [data]);
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
      <BefButton onClick={handleBefBtn} disabled={pagenation <= 1 ? 'disabled' : null}>
        Before
      </BefButton>
      <NextButton onClick={handleNextBtn} disabled={bLastPage ? 'disabled' : null}>
        Next
      </NextButton>
      <Logout />
      <ListContainer onScroll={multiScroll}>
        {workLists.length &&
          workLists.map((workList, i) => {
            const firstWorkId = workList[0].id;
            return <Line key={firstWorkId} works={workList} scroll={i % 2 && scroll} />;
          })}
      </ListContainer>
    </>
  );
};

export default List;
