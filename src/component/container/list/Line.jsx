import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import { Image } from 'semantic-ui-react';

import ItemContainer from '../../presenter/layouts/ItemContainer';

const StyledImage = styled(Image)`
  &&& {
    width: 100%;
    height: 28.3vh;
    transform: rotate(${props => (props.reverse ? '180deg' : '0')});
  }
`;

const Line = ({ works, scroll, reverse }) => {
  const sourse = 'https://react.semantic-ui.com/images/wireframe/image.png';
  const scrollEl = useRef(null);
  useEffect(() => {
    if (scrollEl.current === null) return;
    scrollEl.current.style.transform = `rotate(180deg) translateY(-${scroll * 2}px)`;
  }, [scroll]);
  if (works === undefined) return <></>;
  if (reverse) {
    return (
      <ItemContainer ref={scrollEl} reverse>
        {works.map(v => {
          return v.workimage === undefined ? (
            <StyledImage key={v._id} src={sourse} size="small" reverse />
          ) : (
            <StyledImage key={v._id} src={v.workimage} size="small" reverse />
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
          <StyledImage key={v._id} src={v.workimage} size="small" />
        );
      })}
    </ItemContainer>
  );
};

export default Line;
