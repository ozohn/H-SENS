/* eslint-disable no-underscore-dangle */
import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

import { MainContext } from '../../context/main/mainContext';

const StyledImage = styled(Image)`
  &&& {
    width: 100%;
    height: 28.3vh;
  }
`;
const ReverseImage = styled(StyledImage)`
  &&& {
    transform: rotate(180deg);
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

const ReverseItem = styled(Item)`
  transform: rotate(180deg) translateY(-${props => props.height * 2}px);
`;

const fillArray = (arr, num) => {
  const checkingArr = [...arr];
  let i = 0;
  while (checkingArr.length !== num) {
    checkingArr.push({ _id: i });
    i += 1;
  }
  return checkingArr;
};

const splitWorks = works => {
  if (!works) {
    return [];
  }
  const splitingNum = 6;
  const splitArray = [];
  const filledArr = fillArray(works, 24);
  filledArr.reduce((bef, cur, i) => {
    bef.push(cur);
    if ((i + 1) % splitingNum === 0) {
      splitArray.push(bef);
      return [];
    }
    return bef;
  }, []);
  return splitArray;
};

const ReverseLine = ({ splitedWork, scrollHeight }) => {
  return (
    <ReverseItem height={scrollHeight}>
      {splitedWork.map(v => {
        if (v.workimage === undefined) {
          const sourse = 'https://react.semantic-ui.com/images/wireframe/image.png';
          return <ReverseImage key={v._id} src={sourse} size="small" />;
        }
        return <ReverseImage key={v._id} src={v.workimage} size="small" />;
      })}
    </ReverseItem>
  );
};

const Line = ({ splitedWork }) => {
  return (
    <Item>
      {splitedWork.map(v => {
        if (v.workimage === undefined) {
          const sourse = 'https://react.semantic-ui.com/images/wireframe/image.png';
          return <StyledImage key={v._id} src={sourse} size="small" />;
        }
        return <StyledImage key={v._id} src={v.workimage} size="small" />;
      })}
    </Item>
  );
};

export default function List() {
  const [scroll, setScroll] = useState('');
  const [splitedWork, setSplitedWork] = useState([]);
  const mainContext = useContext(MainContext);
  const { works } = mainContext.state;

  useEffect(() => {
    const splitedWorks = splitWorks(works);
    setSplitedWork(splitedWorks);
  }, [works]);
  const multiScroll = e => {
    setScroll(e.target.scrollTop);
  };

  return (
    <ListContainer onScroll={multiScroll}>
      {splitedWork[0] !== undefined ? (
        <>
          <Line splitedWork={splitedWork[0]} />
          <ReverseLine splitedWork={splitedWork[1]} scrollHeight={scroll} />
          <Line splitedWork={splitedWork[2]} />
          <ReverseLine splitedWork={splitedWork[3]} scrollHeight={scroll} />
        </>
      ) : (
        <></>
      )}
    </ListContainer>
  );
}
