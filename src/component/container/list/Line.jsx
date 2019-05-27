/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useContext } from 'react';
import styled from 'styled-components';
import { MainContext } from '../../../context/mainContext';
import ItemContainer from '../../presenter/layouts/ItemContainer';

const StyledImage = styled.div`
  display: block;
  width: 100%;
  height: 42.5vh;
  transform: rotate(${props => (props.reverse ? '180deg' : '0')});
  background: no-repeat center / 80% url(${props => props.src});
`;

const Line = ({ works, scroll, reverse }) => {
  const { showWork } = useContext(MainContext);
  const sourse = 'https://react.semantic-ui.com/images/wireframe/image.png';
  const scrollEl = useRef(null);
  useEffect(() => {
    if (scrollEl.current === null) return;
    scrollEl.current.style.transform = `rotate(180deg) translateY(-${scroll * 2}px)`;
  }, [scroll]);
  if (works === undefined) return null;
  if (reverse) {
    return (
      <ItemContainer ref={scrollEl} reverse>
        {works.map(work => {
          return (
            <StyledImage
              onClick={() => showWork(work)}
              key={work._id}
              src={work.workimage ? work.workimage : sourse}
              size="small"
              reverse
            />
          );
        })}
      </ItemContainer>
    );
  }
  return (
    <ItemContainer>
      {works.map(v => {
        return v.workimage === undefined ? (
          <StyledImage key={v._id} src={sourse} size="small" />
        ) : (
          <StyledImage
            onClick={() => showWork(v)}
            key={v._id}
            src={v.workimage}
            size="small"
          />
        );
      })}
    </ItemContainer>
  );
};

export default Line;
