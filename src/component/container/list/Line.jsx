/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ItemContainer from '../../presenter/layouts/ItemContainer';

const StyledImage = styled.div`
  display: block;
  width: 100%;
  height: 42.5vh;
  background: no-repeat center / 80% url(${props => props.src});
`;

const Line = ({ works, scroll }) => {
  const scrollEl = useRef(null);
  const sourse = 'https://react.semantic-ui.com/images/wireframe/image.png';

  useEffect(() => {
    if (scrollEl.current === null) return;
    scrollEl.current.style.transform = `rotate(180deg) translateY(-${scroll * 2}px)`;
  }, [scroll]);

  return (
    <ItemContainer ref={scroll ? scrollEl : null}>
      {works.map((work, i) => {
        return (
          <StyledImage
            // onClick={() => showWork(work)}
            key={i}
            src={work ? work.workimage : sourse}
            size="small"
          />
        );
      })}
    </ItemContainer>
  );
};

export default Line;
